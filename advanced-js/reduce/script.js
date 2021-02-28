function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("Marcela",44),
    novoAluno("Estevão",15),
    novoAluno("Bruno",33),
    novoAluno("Linda",67)
];

function idadeDaTurma(total,aluno){
    return total+aluno.idade;
}
//reduz todas as entradas de um array em uma unica entrada, isso pode ser somatoria, concatenação etc;;
console.log(alunos.reduce(idadeDaTurma,0));