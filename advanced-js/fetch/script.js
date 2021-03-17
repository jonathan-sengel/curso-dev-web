// let url = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL";

// function converter() {
//     let input = document.getElementById("valor");
//     let valor = input.value;



//     fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL").then((resp) => {
//         return resp.json();
//     }).then((data) => {
//         let rate = data.rates.BRL;
//         let resultado = `${valor} dólares = ${(valor*rate).toFixed(2)} reais`;
//         document.getElementById("resultado").innerHTML = resultado;
//     });
// }


let url = 'https://viacep.com.br/ws/09051330/json/';

function buscaCep() {
    fetch(url).then((resp) => {
        a = resp.json();
    });
}


