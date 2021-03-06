'use strict'
document.addEventListener('DOMContentLoaded', carregarElementos);
let divTabuleiro = document.getElementById('tab');
let divResultado = document.getElementById('resultado');
let textResultado = document.getElementById('texto');
let tituloResultado = document.getElementById('titulo');

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
        efetuarJogada(campoClicado)

        if (estadosJogo.vitoria) {
            console.log('<log> => Partida finalizada, vencedor: ' + jogadorAtual);
            atualizarPlacar();
            exibirResultado(estadosJogo);
            // reiniciarRodada();
        }
        else if (estadosJogo.empate) {
            console.log('<log> => Ocorreu empate;');
            exibirResultado(estadosJogo);
        }

        exibirSimbolo(elemento);
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

    document.querySelectorAll('.interacao').forEach(item => {
        item.classList.remove('selecionado');
    });

    if (!estadosJogo.vitoria && !estadosJogo.empate) {
        let placarJogador = document.getElementById(`j${jogador}`);
        placarJogador.classList.add('selecionado');
    }
    else {
        document.getElementById('reiniciar').classList.add('selecionado');
    }
}

function reiniciarRodada() {
    resetarVariaveis();
    document.querySelectorAll('.campo').forEach(item => {
        item.classList.remove('clicado');
        let child = item.firstChild;
        if (child != null)
            child.remove();

    });
    exibirTabuleiro();
    mostrarJogadorAtual(jogadorAtual);
}

function exibirResultado(estado) {

    divTabuleiro.classList.add('sair-tela');

    setTimeout(() => {
        divTabuleiro.style.display = 'none';
        divResultado.style.display = 'flex';
        divResultado.classList.add('entrar-tela');
        if (estado.vitoria) {
            tituloResultado.innerHTML = 'O VENCEDOR É'
            textResultado.innerHTML = (jogadorAtual == 0) ? '&#128308;' : '&#10006;';
        }
        else if (estado.empate) {
            tituloResultado.innerHTML = 'HOUVE EMPATE'
            textResultado.innerHTML = '&#128308;' + '&#10006;';
        }
    }, 800);

}

function exibirTabuleiro() {
    divResultado.classList.remove('entrar-tela');
    divResultado.classList.add('sair-tela');
    divResultado.style.display = 'none';

    divTabuleiro.classList.remove('sair-tela');
    divTabuleiro.style.display = 'block';
    divTabuleiro.classList.add('entrar-tela');
    setTimeout(() => { limparClasses(); }, 600);

}

function limparClasses() {
    divResultado.classList.remove('entrar-tela');
    divResultado.classList.remove('sair-tela');
    divTabuleiro.classList.remove('entrar-tela');
    divTabuleiro.classList.remove('sair-tela');
}