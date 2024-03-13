let arrayNums = [2, 4, 3, 1, 6, 7, 9, 40, 25, 55, 2, 78];
let arrayMai20 = [];
let arrayMen20 = []

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num >= 20) {
        arrayMai20.push(num);
    }
    else {
        arrayMen20.push(num)
    }
}

console.log("Os números maiores ou igual a 20 são : ", arrayMai20)
console.log("Os números menores que 20 são : ", arrayMen20)