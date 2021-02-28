// cria a função speak generica, e sempre que o objeto chamar esta função e chamar o sound, o this irá se referir ao objeto que chamou a função e não à função;
function speakGeneric(){
    console.log(this.sound);
}

let dog= {
    sound:"Au Au",
    speak: speakGeneric
}

let cat= {
    sound:"Miau!",
    speak: speakGeneric
}
// para chamar a função generica sempre é necessário ter o contexto correto referenciando o this.
dog.speak();
cat.speak();

// utilizar o bind força um "contexto" para a função generica, ela espera um objeto com a propriedade sound, então eu passo qual é o objeto que será colocado no lugar do this lá na function.
let bindedFunction = speakGeneric.bind(dog)
bindedFunction();