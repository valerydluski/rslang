export default function findObjInArray(arr, key, value) {
  const answer = arr.find((element) => {
    return element[key] === value;
  });
  return answer;
}
