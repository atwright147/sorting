// https://mocki.io/v1/a7618665-b8e2-4304-91e5-e35b2ca5607d
export const fetchData = async (url) => {
  // Fetch data from API here:
  const response = await fetch(url);
  return response.json();
};

export const sortData = (data, key) => {
  // Sort data here
  return data.sort((a, b) => a.category.localeCompare(b.category) || a.itemName.localeCompare(b.itemName));
};
