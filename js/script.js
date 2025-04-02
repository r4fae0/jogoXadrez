const pecas = {
    p: '♟', P: '♙', r: '♜', R: '♖', n: '♞', N: '♘',
    b: '♝', B: '♗', q: '♛', Q: '♕', k: '♚', K: '♔'
};

const estadoInicial = [
    "rnbqkbnr", "pppppppp", "        ", "        ",
    "        ", "        ", "PPPPPPPP", "RNBQKBNR"
];

let selecionada = null;

function criarTabuleiro() {
    const tabuleiro = document.getElementById("tabuleiro");
    tabuleiro.innerHTML = "";
    estadoInicial.forEach((linha, i) => {
        [...linha].forEach((peca, j) => {
            const casa = document.createElement("div");
            casa.className = `casa ${ (i + j) % 2 ? 'preta' : 'branca' }`;
            casa.dataset.linha = i;
            casa.dataset.coluna = j;
            casa.textContent = pecas[peca] || "";
            casa.addEventListener("click", selecionarOuMoverPeca);
            tabuleiro.appendChild(casa);
        });
    });
}

function selecionarOuMoverPeca(event) {
    const casa = event.target;
    if (selecionada) {
        selecionada.classList.remove("selecionada");
        casa.textContent = selecionada.textContent;
        selecionada.textContent = "";
        selecionada = null;
    } else if (casa.textContent) {
        selecionada = casa;
        selecionada.classList.add("selecionada");
    }
}

criarTabuleiro();