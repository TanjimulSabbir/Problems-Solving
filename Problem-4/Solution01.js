const sequence = (inputArray) => {
    const result = inputArray.map((number, index) => {
        if (number == 0||inputArray.length==index+1) {
            return number;
        }
        if (inputArray[index + 1]- number == 1) {
            return inputArray[index + 1]- number;
        } else {
            return inputArray[index + 1]- number;
        }
    })

    return result;
}
console.log(sequence([0,1,2,5,6]))