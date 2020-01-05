//Write a recursive function that counts how many sheep jump over the fence. 
//Your program should take a number as input. 
//That number should be the number of sheep you have. 
//The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

//Input: 3
//Output:
//3: Another sheep jumps over the fence
//2: Another sheep jumps over the fence
//1: Another sheep jumps over the fence
//All sheep jumped over the fence

function countingSheep(n) {
    //base case
    if (n === 0) {
        console.log('All sheep jumped over the fence')
        return
    }

    //recursive case
    console.log(`${n}: Another sheep jumps over the fence`)
    countingSheep(n-1)
}

countingSheep(3);

// What is the input to the program? n
// What is the output of the program? console.logs
// What is the input to each recursive call? n decremented by 1
// What is the output of each recursive call? a single console.log

