// write a function that return the two numbers.
// write a functin that return the sum of all numbers (regardless of # params)
// Hint: arthmatic operation, rest operator, forEach()

const TwoNumberSum = (params1, params2) => {
    return params1 + params2
}

function SumAllNumbers(...Params) {
    let sum = 0;
    Params.forEach(element => {
        sum += element;
    })
    return sum;
}

console.log(TwoNumberSum(1, 4), "TwoNumberSum");
console.log(SumAllNumbers(1, 2, 3, 5, 6, 7, 8.5, 9), "AllNumerSum");