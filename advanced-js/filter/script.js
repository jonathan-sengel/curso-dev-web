function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos=[
    novoAluno("Mario",24),
    novoAluno("José",37),
    novoAluno("Marta",29),
    novoAluno("Lourdes", 52)
];
// forma de filtrar os alunos que são menor de 30 anos usando o for;
for (let aluno of alunos){
    if(aluno.idade<30){
        console.log(aluno.nome);
    }
}


//para usar o filter, precisamos definir uma function que será executada como argumento desse filter, essa function recebe um objeto aluno do array alunos e retorna apenas o aluno que passar na validação < 30;
function temMenosde30(aluno){
    return aluno.idade < 30;
}

//aqui definimos outro array que será incluido apenas os alunos que são < 30 anos;
let alunosComMenosde30 = alunos.filter(temMenosde30);
console.log(alunosComMenosde30);

//caso de uso sem o filter;
function filtro(callback){
    let alunosFiltrados=[];
    for(let aluno of alunos){
        if(callback(aluno)){
            alunosFiltrados.push(aluno);
        }
    }
    return alunosFiltrados;
}

console.log(filtro(temMenosde30));