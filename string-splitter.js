// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function stringSplitter(string, seperator) {
    if (!string.includes(seperator)) {
        return [string];
    }
    let idx = string.indexOf(seperator);
    let temp = [string.substring(0, idx)]
    return temp.concat(stringSplitter(string.substring(idx+1), seperator))

}

console.log(stringSplitter("01/02/19", "/"));

// What is the input to the program? string = "01/02/19" seperator ="/"
// What is the output of the program? ["01", "02", "10"]
// What is the input to each recursive call? call 1: "01/02/19" call2: "02/19"  call3: "19"
// What is the output of each recursive call? accumulator value -- return 1: ["19"], return 2: ["02", "19"] return 3: ["01", "02", "19"]