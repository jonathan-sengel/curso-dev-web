'use strict'


document.addEventListener('DOMContentLoaded', carregarElementos);

function carregarElementos() {
    let campos = document.querySelectorAll('.campo');
    let btnReiniciar = document.getElementById('reiniciar');

    btnReiniciar.addEventListener('click', reiniciarRodada);
    campos.forEach(campo => {
        campo.addEventListener('click', resolverClick);
    });
    mostrarJogadorAtual(jogadorAtual);
}

function resolverClick(e) {
    let elemento = e.target;
    let campoClicado = elemento.id;

    if (elemento.classList.contains('clicado'))
        console.log('<log> => Já clicado...');
    else {
        elemento.classList.add('clicado');

        if (efetuarJogada(campoClicado)) {
            setTimeout(() => {
                console.log('<log> => Partida finalizada, vencedor: ' + jogadorAtual);
                console.log('<log> => Atualizando placar...');
                atualizarPlacar();
                reiniciarRodada();

            }, 1000);
        }
        exibirSimbolo(elemento);
        console.log('jogador atual: ' + jogadorAtual);
        mostrarJogadorAtual(jogadorAtual);
    }
}

function exibirSimbolo(elemento) {
    let simbolo = tabuleiro[elemento.id];
    if (simbolo != '') {
        let divSimbolo = document.createElement('div');
        divSimbolo.classList.add(simbolo, 'clicado');
        elemento.append(divSimbolo);
    }
    else {
        console.log("<log> => Jogo já finalizado.. Reinicie para continuar!");
    }
}

function atualizarPlacar() {
    let pontuacaoJ1 = document.getElementById('pontuacao-j0');
    let pontuacaoJ2 = document.getElementById('pontuacao-j1');
    pontuacaoJ1.innerHTML = placar[0];
    pontuacaoJ2.innerHTML = placar[1];
}

function mostrarJogadorAtual(jogador) {

    document.querySelectorAll('.pontuacao').forEach(item => {
        item.classList.remove('selecionado');
    });

    let placarJogador = document.getElementById(`j${jogador}`);
    placarJogador.classList.add('selecionado');
}

function reiniciarRodada() {
    resetarVariaveis();
    document.querySelectorAll('.campo').forEach(item => {
        item.classList.remove('clicado');
        let child = item.firstChild;
        if (child != null)
            child.remove();

    });
    mostrarJogadorAtual(jogadorAtual);
}


