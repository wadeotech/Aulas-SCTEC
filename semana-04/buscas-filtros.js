//1Lista alunos da etapa anterior (com 3 objetos contendo nome, nota e aprovado).
let alunos = [ 
    {nome: "Wellington", Nota: 7, Aprovado: true},
    {nome: "Cristiane", Nota: 10, Aprovado: true},
    {nome: "Bastiana", Nota: 1, Aprovado: false}
];

//2. Usando .find(): Crie uma constante chamada alunoBuscado que procure o aluno chamado "Cristiane". Depois, mostre alunoBuscado no console.log().

const alunoBuscado = alunos.find(aluno => aluno.nome === "Cristiane");
console.log(alunoBuscado);

//3.Usando .filter(): Crie uma constante chamada aprovados que separe apenas os alunos que têm nota >= 7. Depois, mostre aprovados no console.log().

const aprovados = alunos.filter(aluno => aluno.Nota >= 7);
console.log(aprovados);

//4.Usando .every(): Crie uma constante chamada todosAprovados que verifique se todos os alunos têm aprovado === true. Depois, mostre todosAprovados no console.log().
const todosAprovados = alunos.every(aluno => aluno.Aprovado === true);
console.log(todosAprovados);