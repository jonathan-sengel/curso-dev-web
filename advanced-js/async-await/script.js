// será utilizado a base do codigo da aula promise para este exemplo de async/await

let usuarios = ["José", "Arganna", "Richard"];

function listarUsuarios() {
    console.log(usuarios);
}
function inserirUsuario(nome, callback) {

    //promise é um objeto que vai receber como argumento uma função;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            
            let error = false;
            // caso a inserção de usuário não tenha dado erro, utiliza o resolve()
            if (!error) {
                resolve();
            }
            // caso tenha dado erro, passe um argumento qualquer;
            else {
                reject({ msg: "Erro de qualquer coisa" });
            }

        }, 1000);
    })
    //é necessário retornar a promise;
    return promise;
}
// então chamamos a function inserirUsuario com o valor desejado, depois disso, adiciona-se o .then que é referente à promise, então dando ok o retorno ele vai e executa o listarUsuarios
// inserirUsuario("Jonathan").then(listarUsuarios);

//ao contrario doque fui utilizado em promise, que eu chamo o inserirUsuario e passo os argumentos, para o async/await é necessário definir uma funcção deste tipo
async function executar(){

    //defino o await antes da função inserirUsuario, isso faz com que seja aguardado um retorno desta função que está resolvendo a promise, só passará para a proxima linha caso tenha um retorno positivo;
    await inserirUsuario("Billie");
    listarUsuarios();
}
executar();

// sempre importante passar que a função é do tipo async para poder utilizar o await;