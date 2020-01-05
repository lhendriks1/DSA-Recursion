//Write a recursive function that prints the Fibonacci sequence of a given number. 
//The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
//For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
//The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(n) {
    if (n === 1 || n === 0) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(6));

// What is the input to the program? n = 6
// What is the output of the program? 8
// What is the input to each recursive call? call1: n = 4, call2: n = 3, call3: n = 2, call4: n = 1
// What is the output of each recursive call? first return =1 , second return = 1, third return 2, fourth return 3, fifth return 5, sixth return 8

// n = 4 return 3
// function fibonacci(4) {
//     return 2 + 1
// }

// n = 3 retun 2
// function fibonacci(3) {
//     return 1 + 1
// }

// n = 2 return 1
// function fibonacci(2) {
//    1 + 0   
// }


// n = 1 return 1
// function fibonacci(1) {
//     if (n === 1) return 1
// }