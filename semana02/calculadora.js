/*Exercício 2 (slide 84, 15 min): Calculadora

Construa uma calculadora com 3 variáveis (numero1 = 10, numero2 = 5, operador = "*"). Usando switch, execute a operação correspondente (+, -, *, /). O que fazer quando o operador for inválido?*/

const numero1 = 10;
const numero2 = 5;
const operador = "*";
let resultado;

switch (operador) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero1 / numero2;
        break;
    Default:
        resultado = "Operador Inválido";
}

console.log (resultado);
