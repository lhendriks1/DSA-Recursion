// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. 
// Write a function that creates an anagram list, listing all the rearrangements of a given word. 
// For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
// For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". 
// This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". 
// Continue this way until you find all the anagrams for "east". 
// Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

function permutations(subject) {
    if (subject.length === 1) return [subject];

    let results = []
    for (let i = 0; i < subject.length; i++) {
        let prefix = subject[i];
        let remainder = subject.substring(0, i) + subject.substring(i+1);
        for (items of permutations(remainder)) {
            results.push(prefix + items)
        };
    }
    return [...new Set(results)];
}
var s = 'east'
console.log(permutations(s))
console.log(permutations(s).length)

// What is the input to the program? string "east"
// What is the output of the program? [
//   'east', 'eats', 'esat',
//   'esta', 'etas', 'etsa',
//   'aest', 'aets', 'aset',
//   'aste', 'ates', 'atse',
//   'seat', 'seta', 'saet',
//   'sate', 'stea', 'stae',
//   'teas', 'tesa', 'taes',
//   'tase', 'tsea', 'tsae'
// ]
// What is the input to each recursive call? an array of non-prefix characters, eg. call 1: ['ast', 'est', 'eat', 'eas']
// What is the output of each recursive call? an array of perumutations for the current loops prefix letter, eg call1: (prefix is 'e'), output: ['east', 'eats', 'esat', 'esta', 'etas', 'etsa']
