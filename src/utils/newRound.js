function newRound(level, page) {
  const newPage = String(+page + 1);
  const newLevel = level;
  return { newLevel, newPage };
}

export default newRound;
