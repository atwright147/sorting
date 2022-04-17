// https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d
export const fetchData = async (url) => {
  // Fetch data from API here:
  const response = await fetch(url);
  return response.json();
};

export const sortData = (data, key = 'quantity') => {
  // Sort data here

  const sorted = data.sort(
    (a, b) =>
      Number(a[key]) - Number(b[key]) &&
      ( a.category.localeCompare(b.category) || a.itemName.localeCompare(b.itemName) )
  );

  return sorted;
};
