// src/App.tsx
import { useState, useEffect } from "react";
import { Expenses } from "./interfaces/expenses";
import { fetchExpenses } from "./services/expensesServices";
import Title from "./components/Title";
import Table from "./components/Table";
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

  const headers = [
    "Date",
    "Merchant",
    "Amount",
    "Category",
    "Description",
    "Status",
  ];

  return (
    <div id="template-text">
      <Title text="Expenses" />
      <Table headers={headers} data={data} />
    </div>
  );
}

export default App;
