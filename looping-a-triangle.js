/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let number = prompt('How many rows do you want your triangle to have ?')
let result = ''

for(let i = 1; i <= number; i++) {
	console.log(result += '#')
}

//  While loop 
/*
let number = prompt('How many rows do you want your triangle to have ?')
let result = ''
let i = 0

while( i < number) {
	result += '#'
	console.log(result)
 	i++
}
*/