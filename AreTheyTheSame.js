function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] != array2[i]) return false;
  }
  return true;
}
let array1 = [80, 49, 88, 0];
let array2 = [6400, 2401, 7745, 0];
console.log("Hello");
