export default function findObjInArray(arr, key, value) {
  return arr.words.find((element) => {
    return element[key] === value;
  });
}
