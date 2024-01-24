const picture = ["abc", "ded"];
// Output should be
// const addBorders=["*****","*abc*","*ded*","*****"]

const addBorders = (picture) => {
    const base = "*".repeat(picture[0].length + 2);
    picture.push(base);
    picture.unshift(base);
    const output = picture.map(data => {
        if (data!==base) {
            return "*"+ data+ "*";
        } else {
            return base;
        }
    })

    return output;
}

console.log(addBorders(picture))