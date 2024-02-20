export default function orderByProps(obj, arr) {
  const finalArray = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop) && !arr.includes(prop)) {
      finalArray.push({ key: prop, value: obj[prop] });
    }
  }

  finalArray.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(obj, arr[i])) {
      finalArray.unshift({ key: arr[i], value: obj[arr[i]] });
    }
  }
  return finalArray;
}
