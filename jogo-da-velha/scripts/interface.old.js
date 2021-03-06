document.addEventListener('DOMContentLoaded', () => {

    //joga na variavel squares uma lista com todos os elementos .square do html
    let squares = document.querySelectorAll('.square');
    let restart = document.getElementById('restart');

    restart.addEventListener('click', resetGame);

    //para cada elemento square dentro da lista squares, ele atribui a function handleClick ao evento click;
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
    currentPlayer('update');
});

//função executada ao clicar em um elemento .square;
function handleClick(event) {

    //captura o objeto alvo do click pelo event disparado e atribui à variavel square;
    let square = event.target;
    //captura o ID do elemento .square clicado e joga na variavel position;
    let position = square.id;

    // se o retorno da function handleMove passando o argumento position retornar true, ele entra no if;
    if (handleMove(position)) {

        setTimeout(() => {
            alert(`O Jogador ${playerTime} venceu!!!!`);
        }, 50);
        updateScores(playersScore);
        resetGame();

    }


    //chama a function para atualização da visualização do .square clicado exibindo a imagem definida ao usuário (x/o)
    updateSquare(position);

}

//function que atualiza a view do campo clicado na pagina recebendo como argumento um position;
function updateSquare(position) {
    //se o position vir como vazio, ele grava no console log a mensagem abaixo, nao permitindo estourar erro e nem modificando nada;
    if (position == '') {
        console.log('> Por favor clique em um quadrado vazio!');
    }
    else {

        //joga na variavel square o id do .square clicado que foi passado na chamada da função "updateSquare";
        let square = document.getElementById(position.toString());

        //declara variavel symbol recebendo o index referente ao ID do square clicado , sendo assim ele vai definir em symbol se o clique foi do usuário O ou X;
        let symbol = board[position];

        // o square clicado pelo usuário receberá uma div com a class "o" ou "x", o que fará atualizar a visualização de acordo com o ::after configurado no CSS;
        square.innerHTML = `<div class="${symbol}"> </div>`;
        currentPlayer('update');
    }
}

function updateScores(scoresArr) {
    let scoreP0 = document.getElementById('p0-score');
    let scoreP1 = document.getElementById('p1-score');

    scoreP0.innerHTML = scoresArr[0];
    scoreP1.innerHTML = scoresArr[1];
}

function currentPlayer(action) {

    let scoreElementLast = document.getElementById(`p${lastPlayer}`);
    let scoreElementNext = document.getElementById(`p${playerTime}`);

    if (action == 'update') {
        scoreElementLast.classList.remove('selected');
        scoreElementNext.classList.add('selected');
    }
    else if (action == 'restart'){
        scoreElementLast.classList.remove('selected');
        scoreElementNext.classList.remove('selected');
        document.getElementById('p0').classList.add('selected');
    }

}

function resetGame() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        if (square.lastChild) {
            square.lastChild.remove();
        };
    });
    
    currentPlayer('restart');
    restartVariables();
}

function showWinner(){

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