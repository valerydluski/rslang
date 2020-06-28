function randomIntegerGenerator(from, to) {
  const rand = from + Math.random() * (to + 1 - from);
  return Math.floor(rand);
}

export default randomIntegerGenerator;
