export default function orderByProps(obj, arr = []) {
  const initialArray = [];
  const finalArray = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      const index = arr.indexOf(key);
      initialArray.slice(index, 0, { key: key, value: obj[key] });
    } else {
      finalArray.push({ key: key, value: obj[key] });
    }
  }

  finalArray.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...initialArray, ...finalArray];
} 
