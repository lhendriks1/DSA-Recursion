//Calculate the nth triangular number. 
//A triangular number counts the objects that can form an equilateral triangle. 
//The nth triangular number is the number of dots composing a triangle with n dots on a side, 
//and is equal to the sum of the n natural numbers from 1 to n. 
//This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangularNumber(row) { return (row = 1) ? 1 : triangularNumber(row-1) + (row); }


console.log(triangularNumber(3))

// n -- TN
// 1 -- 1
// 2 -- 3
// 3 -- 6
// 4 -- 10
// 5 -- 15
// 6 -- 21

// What is the input to the program? n = 3
// What is the output of the program? 6
// What is the input to each recursive call? call 1: 3 call2: 2  call3: 1 
// What is the output of each recursive call? accumulator value -- base call return 1, recursive 1 returns 3, recursive 2 returns 6

//call1 input 3, return 6
//function triangularNumber(3) { return (row = 1) ? 1 : triangularNumber(2) + (3); }

//call 2 input 2, return 3
//function triangularNumber(2) { return (row = 1) ? 1 : triangularNumber(1) + (2); }

//call 3 input 1, return 1
//function triangularNumber(row) { return (row = 1) ? 1 : triangularNumber(row-1) + (row); }