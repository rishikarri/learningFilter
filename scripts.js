console.log('hi');

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

console.log(filtered);
// filtered is [12, 130, 44]