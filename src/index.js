
exports.min = function min (array) {
  if (Array.isArray(array) == false || array.length == 0) return 0;
  let minimal = array[0];
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] < minimal) {
      minimal = array[i];
    }
  }
  return minimal;
}

exports.max = function max (array) {
  if (Array.isArray(array) == false || array.length == 0) return 0;
  let max = array[0];
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) == false || array.length == 0) return 0;
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return +(sum/array.length).toFixed(2);
}
