import { useEffect, useState } from 'react';
import classNames from 'classnames';

import './OrderSummary.css';
import { fetchData, sortData } from './sort';

let data;

export const OrderSummary = () => {
  const [items, setItems] = useState([]);
  const [sortKey, setSortKey] = useState('');
  const [isDescending, setIsDescending] = useState(true);

  useEffect(() => {
    (async () => {
      data = await fetchData('https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d');
      setItems(sortData(data, 'category'));
    })();
  }, []);

  const getClassNames = (key, direction) => {
    return classNames({
      sorted: sortKey === key,
      'sort-icon-up': sortKey === key && direction,
      'sort-icon-down': sortKey === key && !direction,
    });
  }

  const handleSortBy = (key) => {
    setSortKey(key);
    setIsDescending(!isDescending);
    sortData(items, key, isDescending ? 'desc' : 'asc');
  };

  return (
    <>
      <h1 id="page-title">Order Summary</h1>

      <table className="table" aria-labelledby="page-title">
        <thead>
          <tr>
            <th>Category</th>
            <th>Item Name</th>
            <th
              className={classNames('sortable', getClassNames('clicks', isDescending))}
              onClick={() => handleSortBy('clicks')}
            >Clicks</th>
            <th
              className={classNames('sortable', getClassNames('amount', isDescending))}
              onClick={() => handleSortBy('amount')}
            >Amount</th>
            <th
              className={classNames('sortable', getClassNames('quantity', isDescending))}
              onClick={() => handleSortBy('quantity')}
            >Quantity</th>
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
