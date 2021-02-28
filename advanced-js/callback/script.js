// variavel recebendo função, isso é comum;
let dobro = function (n) {
    return 2 * n;
};

// a ideia do callback é passar uma função como argumento de uma função;
function ola() {
    console.log("Olá");
}

function tchau() {
    console.log("Tchau");
}

function saudacao(s, nome) {
    s();
    console.log(nome);
}
saudacao(tchau, "Jonathan");

// exemplo de uso
let usuarios = ["Adriano", "Marcia", "José"];
function inserirUsuario(nome) {
    setTimeout(() => {
        usuarios.push(nome)
    }, 1000);// isso aqui foi uma simulação de inserção de um novo usuário 1s depois de executada a função, a ideia foi simular o tempo de resposta entre client e server;
}
function listarUsuarios() {
    console.log(usuarios);
}
// uso sem o callback, ocorre o problema de o tempo de resposta não ser rapido suficiente para dar o retorno correto para a minha chamada da funcção;
inserirUsuario("Jonathan");
listarUsuarios();//  por mais que o usuário Jonathan foi adicionado na linha anterior, ele não será listado devido ao tempo de resposta de 1s;

//exemplo de uso com o callback;
let usuarios2 = ["Marta", "Cleusa", "Ricks"];
//aqui eu já defino uma função como argumento para a função inserirUsuario2
function inserirUsuario2(nome, callback) { 
    setTimeout(() => {
        usuarios2.push(nome);
        callback(); //chamo a função que passei como argumento dentro da inserirUsuario2
    },1000);
}
inserirUsuario2("Jonathan",listarUsuarios);
//callback serve para conseguir fazer algo que não é em tempo real mas quer que execute uma função só depois que aquilo ocorrer. Neste caso aqui acima, só quero que o listar usuários seja executado depois que o push do usuário tiver sido realizado;

