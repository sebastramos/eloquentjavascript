// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:


let size = Number(prompt('What the size of your chessboard?'))
let row = '\n'

for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= size; j++) {
    	if (i % 2 === 0) {
    			row += ' #'
    	} else {
      	row += '# '
      }
    }
  row += '\n'
}
console.log(row)