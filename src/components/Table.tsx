// src/components/Table.tsx
import React from "react";
import { Expenses } from "../interfaces/expenses";
import { formatDate } from "../utils.ts/format-date";

interface TableProps {
  headers: string[];
  data: Expenses[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col">
              {header}
            </th>
          ))}
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
  );
};

export default Table;
