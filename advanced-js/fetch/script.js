let url = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL";

function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;



    fetch(url).then((resp) => {
        return resp.json();
    }).then((data) => {
        let rate = data.rates.BRL;
        let resultado = `${valor} dólares = ${(valor*rate).toFixed(2)} reais`;
        document.getElementById("resultado").innerHTML = resultado;
    });
}