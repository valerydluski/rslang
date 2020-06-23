async function wordsFetch() {
  const response = await fetch(
    'https://afternoon-falls-25894.herokuapp.com/words?group=0&page=2&wordsPerExampleSentenceLTE=100&wordsPerPage=10'
  );
  return await response.json();
}

export default wordsFetch;
