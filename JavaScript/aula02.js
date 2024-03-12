// Exemplo de estrutura condicional (if-else) para verificar a idade
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Exemplo de estrutura condicional (if-else if-else) para atribuir uma nota
let nota = 75;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else {
    console.log("Nota D");
}

// Exemplo de estrutura condicional (switch-case) para atribuir uma mensagem com base na pontuação
let pontuacao = 85;
let mensagem;

switch (true) {
    case pontuacao >= 90:
        mensagem = "Excelente pontuação!";
        break;
    case pontuacao >= 80:
        mensagem = "Boa pontuação!";
        break;
    case pontuacao >= 70:
        mensagem = "Pontuação razoável.";
        break;
    default:
        mensagem = "Pontuação insuficiente.";
}

console.log(mensagem);

// Exemplo de loop for para iterar e imprimir números
console.log("Loop for:");
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

// Exemplo de loop for para iterar sobre os elementos de um array
console.log("Loop for com arrays:");
const frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta: " + frutas[i]);
}

// Exemplo de loop for...of para iterar sobre os elementos de um array
console.log("Loop for...of:");
for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

// Exemplo de loop while para imprimir números até um limite
console.log("Loop while:");
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Exemplo de loop do-while para imprimir números até um limite
console.log("Loop do-while:");
let contador2 = 0;
do {
    console.log("Contador 2: " + contador2);
    contador2++;
} while (contador2 < 5);
