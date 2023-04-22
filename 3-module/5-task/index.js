function getMinMax(str) {
  let numbers = str.split(' ').filter(Number);
  return result = { 
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
