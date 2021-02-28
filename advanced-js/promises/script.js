// promises foram criadas para melhorar / substituir o callback.
// utilizaremos o mesmo código do exercicio de callback e modificaremos ele para usar com a promise;

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
inserirUsuario("Jonathan").then(listarUsuarios);
//exemplo de linha caso ocorra o erro. é necessário adicionar o .catch() dentro dele é executada a função com argumento "error" que imprime o error.msg da promise
inserirUsuario("Roberto").then(listarUsuarios).catch((error)=>{
    console.log(error.msg);
})

