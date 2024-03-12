let arrayNums = [2, 4, 3, 1, 6, 7, 9, 40, 25];
let array20 = [];

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num >= 20) {
        array20.push(num);
    }
}

console.log("Os números maiores ou igual a 20 são : ", array20)