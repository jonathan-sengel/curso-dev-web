// primeiro passo é iniciar as variáveis:

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let boardPosition;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(position) {

    if (gameOver) {
        return;
    }


    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();
        if (!gameOver) {

            // ternario, se playertime for igual a zero ? (siginifica que a variavel playerTime será igual ao que vem após o interrogação, senão receba o valor após o :
            playerTime = (playerTime == 0) ? 1 : 0;

            // este if abaixo foi substituido pelo ternário
            // if (playerTime == 0) {
            //     playerTime = 1;
            // }
            // else {
            //     playerTime = 0;
            // }
        }
    }
    return gameOver;
}

function isWin() {

    for (state of winStates) {

        let pos1 = state[0];
        let pos2 = state[1];
        let pos3 = state[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }
    return false;

}