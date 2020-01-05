// Write a recursive function that prints the following organization chart.
// Your output should be as shown below with proper indentation to show the hierarchy. 
// You may store the org chart in an object and send that as an input to your program.

const facebook = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: [
                "Steve",
                "Kyle",
                "Andra",
            ],
            Zhao: [
                "Richie",
                "Sofia",
                "Jen",
            ]
        },
        Schrage: {
            VanDyck: [
                "Sabrina",
                "Michelle",
                "Josh",
            ],
            Swain: [
                "Blanch",
                "Tom",
                "Joe",
            ]
        },
        Sandberg: {
            Goler: [
                "Eddie",
                "Julie",
                "Annie",
            ],
            Hernandez: [
                    "Rowi",
                    "Inga",
                    "Morgan",
            ],
            Moissinac: [
                    "Amy",
                    "Chuck",
                    "Vinni",
            ],
            Kelley: [
                    "Eric",
                    "Ana",
                    "Wes",
            ]
        }
    }
};


function orgChart(org, depth=0) {
    if (Array.isArray(org)) {
        org.forEach(function (item, index) {
            console.log('  '.repeat(depth) + item);
          });
        return;
    }

    for (item in org) {
        console.log('  '.repeat(depth) + item);
        orgChart(org[item], depth+2);
    }
    return
}

console.log(orgChart(facebook))

// What is the input to the program? an object of nested objects with deepest nested children being arrays
// What is the output of the program? a bunch of console logs
// What is the input to each recursive call?  a child object and a depth variable
// What is the output of each recursive call? a console log of the object key (or element value for array) preceded by a calculated number of blank spaces