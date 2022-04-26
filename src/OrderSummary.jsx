import { useEffect, useState } from 'react';

import { SortingIcon } from './components/SortingIcon/SortingIcon';
import './OrderSummary.css';
import { fetchData, sortData } from './sort';

let data;

export const OrderSummary = () => {
  const [items, setItems] = useState([]);
  const [sortKey, setSortKey] = useState('quantity');
  const [isDescending, setIsDescending] = useState(true);

  useEffect(() => {
    (async () => {
      data = await fetchData('https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d');
      setItems(sortData(data, sortKey));
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <th>
              <button aria-label="Sort by clicks" className="disguised" onClick={() => handleSortBy('clicks')}>
                Clicks <SortingIcon column="clicks" sortColumn={sortKey} direction={isDescending ? 'desc' : 'asc'} />
              </button>
            </th>
            <th>
              <button aria-label="Sort by amount" className="disguised" onClick={() => handleSortBy('amount')}>
                Amount <SortingIcon column="amount" sortColumn={sortKey} direction={isDescending ? 'desc' : 'asc'} />
              </button>
            </th>
            <th>
              <button aria-label="Sort by quantity" className="disguised" onClick={() => handleSortBy('quantity')}>
                Quantity <SortingIcon column="quantity" sortColumn={sortKey} direction={isDescending ? 'desc' : 'asc'} />
              </button>
            </th>
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
