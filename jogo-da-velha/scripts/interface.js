document.addEventListener('DOMContentLoaded', () => {

    //joga na variavel squares uma lista com todos os elementos .square do html
    let squares = document.querySelectorAll('.square');

    //para cada elemento square dentro da lista squares, ele atribui a function handleClick ao evento click;
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
});

//função executada ao clicar em um elemento .square;
function handleClick(event) {

    //captura o objeto alvo do click pelo event disparado e atribui à variavel square;
    let square = event.target;
    //captura o ID do elemento .square clicado e joga na variavel position;
    let position = square.id;
    console.log(square.id);

    // se o retorno da function handleMove passando o argumento position retornar true, ele entra no if;
    if (handleMove(position)) {

        setTimeout(() => {
            alert('O Jogo acabou!');
        }, 50);
    }
    //chama a function para atualização da visualização do .square clicado exibindo a imagem definida ao usuário (x/o)
    updateSquare(position);
}

//function que atualiza a view do campo clicado na pagina;
function updateSquare(position) {
    if (position == '') {
        console.log('> Por favor clique em um quadrado vazio!');
    }
    else {
        let square = document.getElementById(position.toString());
        let symbol = board[position];
        square.innerHTML = `<div class="${symbol}"> </div>`;
    }
}

// esta função atualizava todos os quadrados da tela, então foi a função acima que atualiza apenas o quadrado clicado;
// function updateSquares() {
//     let squares = document.querySelectorAll('.square');

//     squares.forEach(square => {
//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             square.innerHTML = `<div class="${symbol}"> </div>`;
//         }
//     });
// }