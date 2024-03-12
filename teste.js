let arrayNums = [2, 4, 3, 1, 6, 7, 9];
let arrayPar = [];

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num % 2 === 0) {
        arrayPar.push(num);
    }
}

console.log(arrayPar); // Isso irá imprimir [2, 4, 6]
