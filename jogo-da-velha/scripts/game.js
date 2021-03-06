let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 0;
let jogadorAnterior;
let estadosJogo = { vitoria: false, empate: false }
let placar = [0, 0];
let arraySimbolos = ['o', 'x'];
let posicoesVencedoras = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//function que efetua a jogada e valida os estados do jogo (vitoria/empate). Recebe a posição (ID da div) clicada pelo usuário;
function efetuarJogada(posicao) {
    jogadorAnterior = jogadorAtual;

    //se a propriedade vitoria ou empate do objeto estadosJogo for verdadeiro, ele apenas retorna para a interface, sem fazer nada;
    if (estadosJogo.vitoria || estadosJogo.empate) {
        return;
    }

    //define o simbolo do jogador atual no index do array tabuleiro, para marcar a posição jogada;
    tabuleiro[posicao] = arraySimbolos[jogadorAtual];

    //propriedades vitorio e empate do objeto estadosJogo recebem o retorno de cada função validada;
    estadosJogo.vitoria = validarVitoria();
    estadosJogo.empate = validarEmpate();

    // se vitoria E empate forem diferente de true, entra aqui;
    if (!estadosJogo.vitoria && !estadosJogo.empate) {

        // aqui definimos o proximo jogador; se jogadorAtual for igual a 1, jogadorAtual recebe 0, caso contrario recebe 1;
        jogadorAtual = (jogadorAtual == 1) ? 0 : 1;
    }

    return estadosJogo;
}

//function para validar se a jogada foi vitoriosa com base em posições predeterminados no array posicoesVencedoras
function validarVitoria() {

    // para cada posição dentro de posicoesVencedoras
    for (pos of posicoesVencedoras) {

        //atribui às variaveis c1 c2 e c3 a informação contida em cada index do array pos
        let c1 = pos[0];
        let c2 = pos[1];
        let c3 = pos[2];

        //se c1 igual a c2 e igal a c3 e diferente de vázio, significa que tem uma jogada vencedora então entra;
        if (tabuleiro[c1] == tabuleiro[c2] && tabuleiro[c1] == tabuleiro[c3] && tabuleiro[c1] != '') {
            //aqui temos um array com duas posições referente a pontuação de cada jogador. Atribui +1 ponto para o jogador que venceu a partida e retorna true;
            placar[jogadorAtual] += 1;
            return true;
        }
    }
    //caso contrario retorna false
    return false;
}


function validarEmpate() {
    //aqui ele vai validar se existe algum campo em branco no array tabuleiro (que grava as jogadas de cada usuário) , se o indexOf retornar -1 significa que nao tem mais campo vazio no tabuleiro, entãao retorna true para empate, caso contrario false;
    return tabuleiro.indexOf('') == -1 ? true : false;
}

//reseta as variaveis para reinicio de jogo;
function resetarVariaveis() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogadorAtual = 0;
    jogadorAnterior;
    estadosJogo.empate = false;
    estadosJogo.vitoria = false;
}