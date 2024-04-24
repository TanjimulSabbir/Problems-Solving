
function randomNumberGenarate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(randomNumberGenarate(1, 6));

const vowelCounter = (sentence) => {
    const vowels = "aeiou"
    return tatalVowel = [...sentence].filter(char => vowels.includes(char.toLowerCase())).length

}

// console.log(vowelCounter("I love Bangladesh"));

function findTheUniqueNumbers(numbers) {
    return numbers.filter((number, index, self) => self.indexOf(number) === index).sort((a, b) => a - b)
}

console.log(findTheUniqueNumbers([1, 2, 5, 5, 6, 3, 8, 11, 34, 43, 34, 5, 10]));
