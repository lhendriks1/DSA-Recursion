//Write a function that reverses a string. 
//Take a string as input, reverse the string, and return the new string.

function reverseString(string) {
    //base case
    if (string.length <= 1) return string

    //recursive case
    return string.charAt(string.length-1) + reverseString(string.slice(0, -1));
}



console.log(`"${reverseString('dogs')}"`)
// What is the input to the program? string, "dogs"
// What is the output of the program? string, "sgod"
// What is the input to each recursive call? call 1: "dogs" call2: "dog" call3: "do" call4: "d"
// What is the output of each recursive call? accumulator value -- call1: "sgod" call2: "god" call3: "od" call4: "d"


// Call order:
//input "dogs" output "s" + "god" // first recurive returns "sgod"
// function reverseString(string) {
//     if (string.length <= 1) return string
//     return string.charAt(string.length-1) + reverseString(string.slice(0, -1));
// }


// input "dog" output "g" + "od" // second recursive returns "god"
// function reverseString(string) {
//     if (string.length <= 1) return string
//     return string.charAt(string.length-1) + reverseString(string.slice(0, -1));
// }

// input "do" output "o" + "d" // third recursive returns "od"
// function reverseString(string) {
//     if (string.length <= 1) return string
//     return string.charAt(string.length-1) + reverseString(string.slice(0, -1));
// }

// input "d" output "d" //basecase returns value "d"
// function reverseString(string) {
//     if (string.length <= 1) return string
//     return string.charAt(string.length-1) + reverseString(string.slice(0, -1));
// }