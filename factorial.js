//Write a recursive function that finds the factorial of a given number. 
//The factorial of a number can be found by multiplying that number by each number between itself and 1. 
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    //base call
    if (n === 1) return 1

    //recursive call
    return n * factorial(--n)
}

console.log(factorial(4))


// What is the input to the program? n = 5
// What is the output of the program? 120
// What is the input to each recursive call? call1: n = 5, call2: n = 4, call3: n = 3, call4: n = 2, call5: n = 1
// What is the output of each recursive call?  return 1 = 1, return 2 = 2, return 3 = 6 return 4 = 24 return 5 = 120




// return  6
// function factorial(3) {
//     if (n === 1) return 1
//     return 3 * 2
// }

// return 2
// function factorial(2) {
//     if (n === 1) return 1
//     return 2 * 1
// }

// return 1
// function factorial(1) {
//     if (n === 1) return 1
// }

