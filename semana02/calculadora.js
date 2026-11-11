/*🚀 Desafio extra

tente isto: coloque numero2 = 0 e operador = "/". O que aparece? Faz sentido dividir 10 por zero? Pense em como o programa poderia avisar o usuário, e tente resolver com um if dentro do case "/"*/

/*Construa uma calculadora com 3 variáveis (numero1 = 10, numero2 = 5, operador = "*"). Usando switch, execute a operação correspondente (+, -, *, /). O que fazer quando o operador for inválido?*/

const numero1 = 10;
const numero2 = 0;
const operador = "/";
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
      if (numero2 === 0) {
        resultado = "Não é possível dividir por zero"
    } else {numero1 / numero2};
      break;
    default:
        resultado = "Operador Inválido";
}

console.log (resultado);
        