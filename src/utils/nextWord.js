function nextWord(prevLevel, prevPage, maxPage = 600) {
  let newPage;
  let newLevel;
  if (prevPage < maxPage) {
    newPage = String(+prevPage + 1);
    newLevel = prevLevel;
  } else {
    newPage = 1;
    newLevel = String(+prevLevel + 1);
  }
  if (+newLevel > 6) newLevel = 1;
  return { level: Number(newLevel), page: Number(newPage) };
}

export default nextWord;
