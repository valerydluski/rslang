export default function getRandomValuesFromArray(arr, n) {
  const sourceArr = [...arr];
  let randomArr = [];
  for (let i = 0; i <= n; i += 1) {
    const random = Math.floor(Math.random() * sourceArr.length);
    randomArr = randomArr.concat(sourceArr.splice(random, 1));
  }
  return randomArr;
}
