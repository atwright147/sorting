// https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d
export const fetchData = async (url) => {
  // Fetch data from API here:
  const response = await fetch(url);
  return response.json();
};

export const sortData = (dataToSort, key = 'quantity') => {
  const TOTAL_INDICATOR = '$total';

  // Sort data here
  const categoryTotals = {};
  dataToSort
    .filter((item) => item.category !== TOTAL_INDICATOR && item.itemName === TOTAL_INDICATOR)
    .forEach((item) => categoryTotals[item.category] = item[key]);

  const sorted = dataToSort.sort((a, b) => {
    if (a.category !== b.category) {
      if (a.category === TOTAL_INDICATOR) {
        return -1;
      } else if (b.category === TOTAL_INDICATOR) {
        return 1;
      } else if (categoryTotals[a.category] > categoryTotals[b.category]) {
        return -1;
      } else {
        return 1;
      }
    }

    if (a.itemName !== b.itemName) {
      if (a.itemName === TOTAL_INDICATOR) {
        return -1;
      } else if (b.itemName === TOTAL_INDICATOR) {
        return 1;
      }
    }

    if (a[key] < b[key]) {
      return 1;
    } else if (a[key] === b[key]) {
      return 0;
    } else {
      return -1;
    }
  });

  return sorted;
};
