//Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the exponent. 
//Use only exponents greater than or equal to 0 (positive numbers)

//powerCalculator(10,2) should return 100
//powerCalculator(10,-2) should return 'exponent should be >= 0'

function powerCalculator(base, exp) {
    if (exp < 1) return 'exponent should be >= 0';
    
    //base call
    if (exp === 1) 
        return base;

    //recursive call
    return base * powerCalculator(base, --exp);
}

console.log(powerCalculator(10, 2))

// What is the input to the program? base, exp
// What is the output of the program? base^exp
// What is the input to each recursive call? original base prop, exp decremented by 1
// What is the output of each recursive call? accumulator value -- if using params (10, 2), the first call returns 10 the 2nd call returns 100 