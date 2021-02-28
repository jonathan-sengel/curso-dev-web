function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos=[
    novoAluno("Mario",24),
    novoAluno("José",37),
    novoAluno("Marta",29),
    novoAluno("Lourdes", 52)
];

//para usar o filter, precisamos definir uma function que será executada como argumento desse filter, essa function recebe um objeto aluno do array alunos e retorna apenas o aluno que passar na validação < 30;
function temMenosde30(aluno){
    return aluno.idade < 30;
}

//aqui definimos outro array que será incluido apenas os alunos que são < 30 anos;
console.log(alunos.filter(temMenosde30));

// caso de uso map, o map não irá trazer um novo array com os elementos filtrados do array principal com as mesmas caracteristicas, ele trará um novo array mas totalmente novo com base dos elementos do array principal;

function nomeIdade(aluno){
    //aqui a função retorna para cada objeto do array, uma string personalizada com os dados do array original;
    return aluno.nome + " tem " + aluno.idade + " anos";
}
//ao executar o map, ele vai criar um novo array inputando todas os retornos dados na função nomeIdade;
console.log(alunos.map(nomeIdade));

//obs, cuidado é necessário ao executar função no map, pois caso tenha informação de atribuição dentro dela, ela pode mudar o valor do array original. utilizado para obter retorno;


