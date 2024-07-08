// Array de objetos representando alunos
let alunos = [
    { nome: "Alice", nota: 7 },
    { nome: "Bob", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Diana", nota: 4 },
    { nome: "Elena", nota: 6 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chama a função e armazena o resultado
let alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibe os alunos aprovados
console.log(alunosAprovados);
