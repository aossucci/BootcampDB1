// Bem-vindos à primeira aula de JavaScript!

// Vamos começar com variáveis. Elas são como caixas onde podemos armazenar valores.
// Existem três maneiras de declarar variáveis: usando 'var', 'let' e 'const'.

let nome = "Maria"; // Declaração de uma variável chamada "nome" e atribuição do valor "Maria".
const idade = 30; // Declaração de uma constante chamada "idade" com valor 30. O valor não pode ser alterado.
var altura = 1.65; // Declaração de uma variável "altura" com valor 1.65. (Menos utilizado, substituído por let e const)

// Tipos de dados em JavaScript:
// Existem seis tipos de dados primitivos: string, number, boolean, undefined, null e symbol.
// E dois tipos de dados compostos: object e array.

// Vamos imprimir as variáveis para ver seus valores.
console.log("Nome:", nome); // Imprime o valor da variável "nome" no console.
console.log("Idade:", idade); // Imprime o valor da constante "idade".
console.log("Altura:", altura); // Imprime o valor da variável "altura".

// Agora, vamos explorar operadores. Eles nos permitem realizar operações em dados.

let x = 10;
let y = 5;

// Operadores aritméticos
console.log("Soma:", x + y); // Soma
console.log("Subtração:", x - y); // Subtração
console.log("Multiplicação:", x * y); // Multiplicação
console.log("Divisão:", x / y); // Divisão
console.log("Resto da Divisão:", x % y); // Resto da divisão

// Operadores de atribuição
x += 5; // Equivalente a x = x + 5
console.log("Novo valor de x:", x);

// Operadores de comparação
console.log("x é igual a y?", x === y); // Igualdade estrita
console.log("x é diferente de y?", x !== y); // Diferença estrita
console.log("x é maior que y?", x > y); // Maior que
console.log("x é menor que y?", x < y); // Menor que
console.log("x é maior ou igual a y?", x >= y); // Maior ou igual a
console.log("x é menor ou igual a y?", x <= y); // Menor ou igual a

// Operadores lógicos
console.log("Conjunção lógica:", (x > 0) && (y > 0)); // AND lógico
console.log("Disjunção lógica:", (x > 0) || (y > 0)); // OR lógico
console.log("Negação lógica de x:", !(x > 0)); // NOT lógico

// Estruturas de Controle:

let numero = 8;

// Estrutura condicional (if-else)
if (numero % 2 === 0) {
    console.log(numero, "é um número par.");
} else {
    console.log(numero, "é um número ímpar.");
}

// Estrutura de repetição (for)
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Estrutura de repetição (while)
let contador = 3;
console.log("Contando de 3 até 0:");
while (contador >= 0) {
    console.log(contador);
    contador--;
}
