// primeiro passo é iniciar as variáveis:

let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let lastPlayer=0;
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

    //se gameOver for igual a true ele entra neste if e retorna true;
    if (gameOver) {
        return;
    }

    //valida se o board no index referente ao position (que é o id do square clicado) está vazio, só entra no if se estiver
    if (board[position] == '') {
        
        // define no index refere ao position dentro do array board o simbolo do player 1 ou 2, por padrão a primeira chamada será player 1 "O";
        board[position] = symbols[playerTime];

        //atribui a variavel gameOver a function isWin (ela valida se a ultima jogada foi vencedora);
        gameOver = isWin();
        if (!gameOver) {

            lastPlayer= playerTime;
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


//function que verifica se a ultima jogada foi vencedora;
function isWin() {

    //laço de repetição dentro do winStates (que é o array que define os estados de vitória). Então para cada index dentro deste array ele retorna o state;
    for (state of winStates) {

        //atribui estas 3 variaves passando a informação de cada item dentro do array winStates;
        let pos1 = state[0];
        let pos2 = state[1];
        let pos3 = state[2];

        //caso essa validação abaixo seja verdadeira, significa que existe uma das posições de vitoria definida no array winStates, então ele retorna true para o isWin();
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }
    }
    //caso contrário retorna false;
    return false;

}