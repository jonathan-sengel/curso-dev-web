// este desafio consiste em fazer manualmente a mesma funcionalidade do map e reduce, sem utilizar os metodos já existentes para o array;


function novoCarro (cor, velocidade){
    return {cor,velocidade};
}

let carros = [
    novoCarro("Vermelho",180),
    novoCarro("Preto",130),
    novoCarro("Branco",180),
    novoCarro("Branco",210),
    novoCarro("Vermelho",240)
];

//MAP
function corVelocidade(carro){
    return "Carro "+carro.cor + " velocidade máxima: " + carro.velocidade+"km/h";
}
console.log(carros.map(corVelocidade));
//-------------------------------------------------------------------------------

// utilizando forEach
let carrosForEach=[];
carros.forEach(carro =>{
    carrosForEach.push("Carro " + carro.cor + " velocidade máxima: " + carro.velocidade + "km/h");
});
console.log(carrosForEach);
//-------------------------------------------------------------------------------

// utilizando for
let carrosFor = [];
for(let i =0; i<carros.length;i++){
    carrosFor.push("Carro " + carros[i].cor + " velocidade máxima: " + carros[i].velocidade + "km/h");
}
console.log(carrosFor);
//-------------------------------------------------------------------------------


//REDUCE
function velMaxCarros (total,carro){
    return total + carro.velocidade;
}
console.log(carros.reduce(velMaxCarros,0));

// utilizando forEach
let reduceForEach = 0;
carros.forEach(carro =>{
    reduceForEach += carro.velocidade;
});
console.log(reduceForEach);

// utilizando o for
let reduceFor=0;
for(let i = 0; i<carros.length; i++){
    reduceFor += carros[i].velocidade;
}
console.log(reduceFor);