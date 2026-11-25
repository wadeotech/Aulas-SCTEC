/*Parte B: a evolução (módulos)
Separe em dois arquivos:
conta-bancaria.js fica só com a classe.
main.js fica com o teste (a execução).
No final da classe, exporte com module.exports.
No main.js, importe com require. Lembre do ./ (mesma pasta) e use o mesmo nome da classe na variável.
Rode node main.js, e não o arquivo da classe.
O resultado deve ser idêntico ao da Parte A.*/

const ContaBancaria = require(`./conta-bancaria`);

const minhaConta = new ContaBancaria("Ana");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.extrato();