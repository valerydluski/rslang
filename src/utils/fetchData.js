const fetchData = async (link, config = null) => {
  try {
    const response = await fetch(link, config);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export default fetchData;
