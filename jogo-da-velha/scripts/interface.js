'use strict'
//define a function carregarElements ao DOMContentLoaded(que é quando o DOM já carregou na pagina);
document.addEventListener('DOMContentLoaded', carregarElementos);
//carregamento das variaveis referentes aos elementos do html;
let divTabuleiro = document.getElementById('tab');
let divResultado = document.getElementById('resultado');
let textResultado = document.getElementById('texto');
let tituloResultado = document.getElementById('titulo');

function carregarElementos() {
    let campos = document.querySelectorAll('.campo');
    //"campos" é a variavel que possui node list com todos os elementos clicaveis do tabuleiro 9 no total;
    campos.forEach(campo => {
        //para cada elemento campo, ele atribui a function resolverClick para o evento click
        campo.addEventListener('click', resolverClick);
    });

    let btnReiniciar = document.getElementById('reiniciar');
    btnReiniciar.addEventListener('click', reiniciarRodada);

    //chama function para mostrar o jogador atual na tela (primeira execução é o player 0);
    mostrarJogadorAtual(jogadorAtual);
}

//function executada quando o usuário clica no campo que deseja fazer a jogada, recebe um event como argumento por padrão;
function resolverClick(e) {

    //definição de variaveis: elemento = ao target do elemento clicado, campoClicado = id do elemento clicado;
    let elemento = e.target;
    let campoClicado = elemento.id;

    //se na lista de classes do elemento clicado contiver a classe "clicado" (usada para controle), ele apenas imprime a informação no log e não executa nada;
    if (elemento.classList.contains('clicado'))
        console.log('<log> => Já clicado...');

    //caso não contenha entra aqui;.
    else {
        // primeiramente adiciona a classe "clicado" à lista de classes do elemento, para não ser clicada mais de uma vez;
        elemento.classList.add('clicado');
        //chama a função para efetuar a jogada passando o campo clicado;
        efetuarJogada(campoClicado)

        //valida se a propriedade vitoria é true e entra se for;
        if (estadosJogo.vitoria) {
            //funcção para atualizar o placar;
            atualizarPlacar();
            //chama funcção para exibir resultado passando estadosJogo como argumento
            exibirResultado(estadosJogo);
        }
        //valida se a propriedade empate é true, se for entra;
        else if (estadosJogo.empate) {
            //chama funcção para exibir resultado tambem passando estadosJogo como argumento
            exibirResultado(estadosJogo);
        }

        exibirSimbolo(elemento);
        mostrarJogadorAtual(jogadorAtual);
    }
}

//função para mostrar o simbolo referente ao jogador que clicou no cmapo, recebendo o elemento clicado como argumento;
function exibirSimbolo(elemento) {
    //pega o simbolo ("o" ou "x") lá do array tabuleiro, passando o id do elemento no index dele;
    let simbolo = tabuleiro[elemento.id];
    //se for diferente de vazio entra;
    if (simbolo != '') {
        //cria um elemento div, atribui a ele a classe "clicado" (para controle) e adiciona este div ao elemento clicado lá no tabuleiro;
        let divSimbolo = document.createElement('div');
        divSimbolo.classList.add(simbolo, 'clicado');
        elemento.append(divSimbolo);
    }
    else {
        console.log("<log> => Jogo já finalizado.. Reinicie para continuar!");
    }
}
//responsavel por atualizar a visualização de placar na tela;
function atualizarPlacar() {
    //basicamente manipula os elementos html para exibir a informação que tem no array placar para cada jogador;
    let pontuacaoJ1 = document.getElementById('pontuacao-j0');
    let pontuacaoJ2 = document.getElementById('pontuacao-j1');
    pontuacaoJ1.innerHTML = placar[0];
    pontuacaoJ2.innerHTML = placar[1];
}

//responsavel por evidenciar na tela o jogador atual, recebe um jogador como argumento;
function mostrarJogadorAtual(jogador) {

    //aqui pega todos os elementos que tenham ".interação" e roda um foreach neste array, depois ele pega cada item deste array e remove a classe "selecionado" deste elemento;
    document.querySelectorAll('.interacao').forEach(item => {
        item.classList.remove('selecionado');
    });

    //se vitoria e empate forem falsos entra;
    if (!estadosJogo.vitoria && !estadosJogo.empate) {
        //pega o elemtento placar referente ao jogador atual e joga a classe "selecionado" nele, para que seja evidenciado na tela;
        let placarJogador = document.getElementById(`j${jogador}`);
        placarJogador.classList.add('selecionado');
    }
    else {
        //caso o if acima não rode significa que o jogo acabou (vitoria ou empate), ele vai pegar o elemento "reiniciar" e colocar a classe "selecionado" para induzir o usuário clicar nele;
        document.getElementById('reiniciar').classList.add('selecionado');
    }
}


function reiniciarRodada() {
    //chama função para limpar variaveis no game.js
    resetarVariaveis();
    
    //para todos os elementos que tenham .campo roda um foreach e, em cada elemento encontrado, ele vai remover a classe "clicado" e tambem remover o firstChild caso tenha. Isso limpa todo o tabuleiro para poder receber uma nova partida;
    document.querySelectorAll('.campo').forEach(item => {
        item.classList.remove('clicado');
        let child = item.firstChild;
        if (child != null)
            child.remove();

    });

    //chama function para exibir o tabuleiro;
    exibirTabuleiro();
    mostrarJogadorAtual(jogadorAtual);
}

// funcção para mostrar na tela se o jogo teve um vencedor ou empate;
function exibirResultado(estado) {

    //faz o tabuleiro sair da tela com efeito
    divTabuleiro.classList.add('sair-tela');

    setTimeout(() => {
        //tabuleiro sai da tela e entra a div com os dados do resultado do jogo;
        divTabuleiro.style.display = 'none';
        divResultado.style.display = 'flex';
        divResultado.classList.add('entrar-tela');

        //caso vitoria seja verdadeira, entra aqui e imprime a informação de VENCEU + simbolo do jogador.
        if (estado.vitoria) {
            tituloResultado.innerHTML = 'VENCEU'
            textResultado.innerHTML = (jogadorAtual == 0) ? '&#x1F383;' : '&#x1F47B;';
        }
        //caso empate seja verdadeiro, entra e imprime na tela a informação de EMPATE + simbolo do jogador;
        else if (estado.empate) {
            tituloResultado.innerHTML = 'EMPATOU'
            textResultado.innerHTML = '&#x1F383;' + '&#x1F47B;';
        }
    }, 800);

}

//funcção responsavel por esconder os dados do resultado e exibir o tabuleiro quando chamada;
function exibirTabuleiro() {
    divResultado.classList.remove('entrar-tela');
    divResultado.classList.add('sair-tela');
    divResultado.style.display = 'none';

    divTabuleiro.classList.remove('sair-tela');
    divTabuleiro.style.display = 'block';
    divTabuleiro.classList.add('entrar-tela');
    setTimeout(() => { limparClasses(); }, 600);

}

//responsavel por limpar as classe dos elementos mencionados;
function limparClasses() {
    divResultado.classList.remove('entrar-tela');
    divResultado.classList.remove('sair-tela');
    divTabuleiro.classList.remove('entrar-tela');
    divTabuleiro.classList.remove('sair-tela');
}