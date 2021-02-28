let alunoA = {
    nome:"Jonathan",
    idade: 15
}

let alunoB = alunoA;

alunoB.idade = 25;

//quando se tratado de objetos e arrays no js, quando atribuimos um objeto A ao objeto B, os dois são iguais, porem um tem a atribuição por referencia do outro. Então tudo que for alterado no objeto B ele será replicado no objeto A. Isso não ocorre para tipos primitimos, lá é atribuito o valor e não referencia;

//para contornar isso em arrays, podemos usar o .slice(), quando não é passado nada de argumento nesta função do array, ele corta o array por completo "duplicando" ele e atribuindo a nova variavel, exemplo:

let pessoasA = ["Herbert","Frida","Glória"];

let pessoasB = pessoasA.slice();
pessoasB.push("Alucard");

// coloca-se 3 pontos para ele pegar o conteudo do array A e não atribuir o array A como um item no array C;
// let pessoasC = [...pessoasA];
let pessoasC = new Array(...pessoasA);
pessoasC.push("Goldenrod");
pessoasC.push("Goldenrod2");


//para objetos, pode-se fazer o seguitne:
let objA = {
    x:300,
    y:100,
    z:-88
};

let objB = {...objA};
objB.z = -996;

let objC = Object.assign({},objA);
objC.y = 76;

// Sempre bom lembrar:
// Atribuição por valor, faz uma cópia do elemento original, e qualquer alteração na cópia nao vai refletir no original.

// Atribuição por referencia, não faz cópia, é como se desse um novo apelido para o objeto orinal. Qualquer modificação no novo elemento altera tambem o original.