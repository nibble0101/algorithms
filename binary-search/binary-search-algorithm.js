var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess = Math.floor((min + max) / 2);
  while (array[guess] !== targetValue) {
    if (max < min) {
      return -1;
    } else {
      if (array[guess] === targetValue) {
        return guess;
      } else if (array[guess] < targetValue) {
        min = guess + 1;
        guess = Math.floor((min + max) / 2);
      } else {
        max = guess - 1;
        guess = Math.floor((min + max) / 2);
      }
    }
  }
  return guess;
};

var primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
];

var result = doSearch(primes, 23);
console.log("Found prime at index " + result);

// Program.assertEqual(doSearch(primes, 73), 20);
