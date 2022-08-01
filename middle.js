// ACTUAL FUNCTION MIDDLE
// 
const middle = function(arr) {
  let result = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    let x = Math.floor(arr.length / 2);
    result.push(arr[x]);
    return result;
  } else if (arr.length % 2 === 0) {
    let y = arr.length/2;
    return arr.splice(y - 1, 2);
  }
}


module.exports = middle;