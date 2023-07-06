// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 

// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 

// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 

// Neither may use the standard reverse method.

// Solution A1
function reverseArray(arr) {
let result = []
for(let i = arr.length -1; i >= 0; i--) {
	result += arr[i]
}
	return result.split('')
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];

// Solution A2
function reverseArray(arr) {
  let array = []
  for(let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i])
  }
  return array
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"]



// Solution B1
function reverseArrayInPlace(arrayValue) {
 	return arrayValue.sort((a,b) => b - a)
}

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]