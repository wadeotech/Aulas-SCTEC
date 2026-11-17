
// 1. Array notas
const notas = [5,6,7,8,9];

console.log(notas[0]);
console.log(notas.length);
console.log(notas[notas.length-1]);

// 2. Array frutas
const frutas = ["jaca", "melancia", "uva"];
frutas [1] = "banana";

console.log(frutas);
console.log(frutas[10]);

// 3. Array misto e typeof de cada posição
const dadosPessoais = ["Wellington", 51, true];

console.log(typeof dadosPessoais[0]);
console.log(typeof dadosPessoais[1]);
console.log(typeof dadosPessoais[2]);

// 4. Teste do erro (colocado por último para não travar o restante)

notas.length();