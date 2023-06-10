// Define a recursive function isEven corresponding to this description.

// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

// The function should accept a single parameter (a positive, whole number) and return a Boolean.


function isEven(n) {
	if (n < 0) {
		return 'No number under 0 please'
  } else if (n === 0) {
  	return true
  } else if (n === 1) {
  	return false
  } else {
  	return isEven(n-2)
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??