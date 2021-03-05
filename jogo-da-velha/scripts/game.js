let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 0;
let jogadorAnterior;
let estadosJogo = { vitoria: false, empate: false }
let placar = [0, 0];
let arraySimbolos = ['o', 'x'];
let posicoesVencedoras = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function efetuarJogada(posicao) {
    jogadorAnterior = jogadorAtual;

    if (estadosJogo.vitoria || estadosJogo.empate) {
        return;
    }

    tabuleiro[posicao] = arraySimbolos[jogadorAtual];

    estadosJogo.vitoria = validarVitoria();
    estadosJogo.empate = validarEmpate();

    if (!estadosJogo.vitoria && !estadosJogo.empate) {

        jogadorAtual = (jogadorAtual == 1) ? 0 : 1;
    }

    return estadosJogo;
}

function validarVitoria() {

    for (pos of posicoesVencedoras) {

        let c1 = pos[0];
        let c2 = pos[1];
        let c3 = pos[2];

        if (tabuleiro[c1] == tabuleiro[c2] && tabuleiro[c1] == tabuleiro[c3] && tabuleiro[c1] != '') {
            placar[jogadorAtual] += 1;
            return true;
        }
    }
    return false;
}

function validarEmpate() {
    return tabuleiro.indexOf('') == -1 ? true : false;
}

function resetarVariaveis() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogadorAtual = 0;
    jogadorAnterior;
    estadosJogo.empate = false;
    estadosJogo.vitoria = false;
}