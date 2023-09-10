const picture = ["abc", "ded"];
// Output should be
// const addBorders=["*****","*abc*","*ded*","*****"]

const addBorders = (picture) => {
    const base = "*".repeat(picture[0].length + 2);
    picture.push(base);
    picture.unshift(base);

    for (let i = 1; i < picture.length - 1; i++) {
        //    picture[i]="*"+picture[i]+"*";
        picture[i] = "*".concat(picture[i], "*")

    }
    return picture;
}
console.log(addBorders(picture));