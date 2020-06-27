function newRound(level, page, maxPage) {
  let newPage;
  let newLevel;
  if (page < maxPage) {
    newPage = String(+page + 1);
  } else {
    newPage = 1;
    newLevel = String(+level + 1);
  }
  if (newLevel > 6) newLevel = 1;
  return { newLevel, newPage };
}

export default newRound;
