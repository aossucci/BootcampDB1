let arrayNums = [2, 4, 3, 1, 6, 7, 9, 40, 25, 55, 2, 78];
let arrayMaiores20 = [];
let arrayMenores20 = []

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num >= 20) {
        arrayMaiores20.push(num);
    }
    else {
        arrayMenores20.push(num)
    }
}

console.log("Os números maiores ou igual a 20 são : ", arrayMaiores20)
console.log("Os números menores que 20 são : ", arrayMenores20)