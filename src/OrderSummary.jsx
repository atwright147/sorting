import { useEffect, useState } from 'react';

import './OrderSummary.css';
import { fetchData, sortData } from './sort';

let data;

export const OrderSummary = ({ sorted }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchUsers();
  });

  const fetchUsers = async () => {
    data = await fetchData('https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d');
    sorted = sortData(data, 'category');

    setItems(sorted);
  };

  return (
    <>
      <h1 id="page-title">Order Summary</h1>

      <table className="table" aria-labelledby="page-title">
        <thead>
          <tr>
            <th>Category</th>
            <th>Item Name</th>
            <th>Clicks</th>
            <th>Amount</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.itemName}</td>
              <td>{item.clicks}</td>
              <td>{item.amount}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
