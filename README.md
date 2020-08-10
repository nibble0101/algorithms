# Algorithms

This is the code i write as i learn algorithms.

## Implement binary search

Source: [khanacademy](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/pc/challenge-binary-search)

Complete the doSearch function so that it implements a binary search, following the pseudo-code below:
1. Let min = 0 and max = n-1.
2. If max < min, then stop: target is not present in array. Return -1.
3. Compute guess as the average of max and min, rounded down (so that it is an integer).
4. If array[guess] equals target, then stop. You found it! Return guess.
5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
6. Otherwise, the guess was too high. Set max = guess - 1.
7. Go back to step 2.

## code

### First solution

```javascript
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    while(min <= max){
        guess = Math.floor((min + max)/2);
        if(array[guess] === targetValue){
            return guess;
        }else if(array[guess] < targetValue){
            min = guess + 1;
        }else{
            max = guess - 1;
        }
    }
    


	return -1;
};

```
### Second solution

```javascript
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

```
