import React, { useState, useEffect } from "react";
import { Expenses } from "./interfaces/expenses";
import { formatDate } from "./utils.ts/format-date";

function App() {
  const divStyle = {
    borderBottomStyle: "solid",
    borderWidth: "3px",
    marginBottom: "2em",
  };
  const loadingDivStyle = {
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#333",
    margin: "20px",
    padding: 0,
    display: "Flex",
    justifyContent: "center",
  };

  const [data, setData] = useState<Expenses[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://expenses-backend-mu.vercel.app/expenses",
          {
            headers: {
              "Content-Type": "application/json",
              Username: "lionel.wilson",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div style={loadingDivStyle}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div id="template-text">Error: {error}</div>;
  }

  return (
    <div id="template-text">
      <div style={divStyle}>
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
