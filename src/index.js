
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
  
}

exports.avg = function avg (array) {
 
}
