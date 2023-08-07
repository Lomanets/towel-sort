
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  
  let out = [];

  matrix.forEach((element, index) => {
      if (index % 2 == 0) {
          out.push(...element);
      } else {
        out.push(...element.reverse())  
      }
  });
  return out;
}
