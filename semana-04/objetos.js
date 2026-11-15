//1.Crie um Array de Objetos chamado alunos contendo 3 objetos.
let alunos = ["Wellington", "Cristiane", "Bastiana"];
console.log(alunos);

//2.Cada objeto (aluno) deve ter três propriedades: nome (texto), nota (número) e aprovado (booleano: true ou false).
alunos = [ 
    {nome: "Wellington", Nota: 7, Aprovado: true},
    {nome: "Cristiane", Nota: 10, Aprovado: true},
    {nome: "Bastiana", Nota: 1, Aprovado: false}
];

console.log(alunos);

//3.Use o console.log() para mostrar apenas o nome do segundo aluno da lista
console.log(alunos[1].nome);

//4. Altere a nota do primeiro aluno para 10.
alunos[0].Nota = 10;
console.log(alunos[0].Nota);

//Use um forEach (igual você praticou antes!) para percorrer a lista alunos e mostrar no console a frase: "Aluno: [nome] - Nota: [nota]" para cada um deles. (Dica: dentro do forEach, cada item que ele pega já é o objeto inteiro do aluno, então você usa aluno.nome e aluno.nota!)
alunos.forEach((aluno, i) => {
    console.log(`Aluno: ${aluno.nome} - Nota: ${aluno.Nota}`)
});
