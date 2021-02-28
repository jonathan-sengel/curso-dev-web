// forma convencional de declarar uma function e depois chama-la
function dobro(x) {
    console.log(2 * x);
}

dobro(5);

// declarando uma variavel e atribuido a mesma função à ela (em js pode atribuir funções à variaveis); **função anonima, nao dei nome a ela.
let dobro2 = function (x) {
    console.log(2 * x);
}

dobro2(10);

// aqui é uma arrow function não preciso colocar o nome "function", mas preciso adicionar o => após os argumentos. Detalhe importante, caso seja apeas um argumento, posso tirá-lo do ();
let dobro3 = (x) => {
    console.log(2 * x);
}

dobro3(15);

// quando uma arrow function só retorna algo, podemos abrevia-la mais ainda, veja abaixo;
let dobro4 = x => 2 * x;
console.log(dobro4(20));
// desta forma o => significa que é uma function, o x é o argumento (caso tenha mais de um, coloca-los no()) e o que vem após o => é o retorno dessa function.

//-------------------------------------------------------------------------------------------

// declarando uma função que utilize o this; Ao inves de passarmos o argumento para a função, chamamos ele dando um this dentro da função, que irá ser referente a propriedade x do objeto que chamou a função.
let dobro5 = function(){
    return 2 * this.x;
}

let numero = {
    x:25,
    d:dobro5
}
// aqui é impresso o objeto "numero" chamando a propriedade d dentro dela que é referente a chamada da função dobro5, atribuindo o x do objeto numero no this.x dentro da função dobro5;
console.log(numero.d());

// se tentar fazer uma arrow function igual a de cima, usando o this, não terá o mesmo resultado, pois a arrow function não consegue interpretar o "this", ele se referencia ao windows. E tambem não é possivel de utilizar o bind com ela, mesmo que a gente especifique qual é o objeto de chamada.
let dobro6 = () => 2* this.x; //importante lembrar que quando a arrow function não retorna nada , precisamos abrir e fechar o ()
let numero2 = {
    x:25,
    d:dobro6
}
// isso retorna not a number, pois ela nao resolve o this, denile ele sempre como o objeto window
console.log(numero2.d());


