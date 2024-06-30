import { useState, useEffect } from "react";
import { Expenses } from "./interfaces/expenses";
import { formatDate } from "./utils.ts/format-date";
import { fetchExpenses } from "./services/expensesServices";
import "./styles/App.css"; // Import the CSS file

function App() {
  const [data, setData] = useState<Expenses[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        setData(data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadExpenses();
  }, []);

  if (isLoading) {
    return (
      <div className="loadingDivStyle">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div id="template-text">Error: {error}</div>;
  }

  return (
    <div id="template-text">
      <div className="divStyle">
        <h1>Expenses</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Merchant</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{formatDate(item.date)}</th>
              <td>{item.merchant}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
