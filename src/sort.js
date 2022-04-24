// https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d
export const fetchData = async (url) => {
  // Fetch data from API here:
  const response = await fetch(url);
  return response.json();
};

export const compare = (a, b, direction) => {
  if (direction === 'asc') {
    return a < b;
  }
  return a > b;
};

export const sortData = (dataToSort, key = 'quantity', direction = 'desc') => {
  const TOTAL_INDICATOR = '$total';

  let UP = 1;
  let DOWN = -1;

  if (direction === 'asc') {
    UP = -1;
    DOWN = 1;
  }

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
      // } else if (categoryTotals[a.category] > categoryTotals[b.category]) {
      } else if (compare(categoryTotals[a.category], categoryTotals[b.category], direction)) {
        return DOWN;
      } else {
        return UP;
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
      return UP;
    } else if (a[key] === b[key]) {
      return 0;
    } else {
      return DOWN;
    }
  });

  return sorted;
};
