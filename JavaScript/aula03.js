/*
let n = 9
console.log(`Tabuada do ${n}`)

for (let i = 0; i <= 10; i++) {
    let resultado = i * n
    console.log(`${i} x ${n} = ${resultado}`)
} 

for (let i = 100; i <= 200; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

let soma = 0

for (let i = 0; i < 500; i++) {
    const n1 = i + 1 // para corrigir e começar em 1
    if (n1 % 2 !== 0 && n1 % 3 === 0) {
        soma += n1
    }
}
console.log(soma)


let n1 = 3;
let valorDado;
let contador = 0;

do {
    valorDado = Math.floor(Math.random() * 6) + 1;
    contador += 1;
    console.log(valorDado)
} while (n1 !== valorDado);

console.log("Número escolhido:", n1);
console.log("Número de tentativas:", contador);
const num = 5
let fatorial = 1

for (let i = 1; i <= num; i++) {
    fatorial *= i
    console.log(fatorial)
}
console.log(fatorial)

function somar(a, b) {
    let soma = a + b
    return soma
}

function subtrair(a, b) {
    let subtração = a - b
    return subtração
}

function dividir(a, b) {
    let divisão = a / b
    return divisão
}

function multiplicar(a, b) {
    let multiplicação = a * b
    return multiplicação
}

console.log(somar(5, 3))
console.log(subtrair(5, 3))
console.log(dividir(5, 3).toFixed(2))
console.log(multiplicar(5, 3))

function maiorNumero(a, b) {
    if (a > b) return a
    return b
}

function maiorNumero2(a, b) {
    return a > b ? a : b
}

console.log(maiorNumero(7, 5))
console.log(maiorNumero2(7, 5))

function mediaAritmetica(a, b, c) {
    return (a + b + c) / 3;
}

function mediaPonderada(a, b, c) {
    return (a * 5 + b * 3 + c * 2) / 10;
}

function media(n1, n2, n3, letra) {
    switch (letra) {
        case "A":
            return mediaAritmetica(n1, n2, n3);
        case "P":
            return mediaPonderada(n1, n2, n3);
        default:
            return "Letra inválida";
    }
}

console.log(media(3, 4, 5, "A")); // Saída: 4
console.log(media(3, 4, 5, "P")); // Saída: 3.5


let array = [32, 23, 45]

array.push(40)

soma = 0
for (let i = 0; i < array.length; i++) {
    soma += array[i]
}

console.log(soma)
console.log(array)
*/