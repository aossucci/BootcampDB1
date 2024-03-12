let arrayNums = [2, 4, 3, 1, 6, 7, 9];
let arrayPar = [];
let arrayImp = [];

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num % 2 === 0) {
        arrayPar.push(num);
    }
}

for (let i = 0; i < arrayNums.length; i++) {
    let num = arrayNums[i];
    if (num % 2 !== 0) {
        arrayImp.push(num);
    }
}

console.log(`Os números pares do arrayNums são: ${arrayPar}`);
console.log(`Os números ímpares do arrayNums são: ${arrayImp}`); 
