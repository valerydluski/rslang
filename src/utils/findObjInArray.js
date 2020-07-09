export default function findObjInArray(arr, key, value) {
  // console.log('findObjInArray -> value', value);
  // console.log('findObjInArray -> key', key);
  // console.log('findObjInArray -> arr', arr);
  const answer = arr.find((element) => {
    return element[key] === value;
  });
  return answer;
}
