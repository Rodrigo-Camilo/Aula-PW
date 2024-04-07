let colunaAtiva = false;
let colunaAtual = -1; 

const colorir = (idTabela, coluna) => {
    const tabela = document.getElementById(idTabela);
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
        const celulas = linhas[i].getElementsByTagName('td');
        for (let j = 0; j < celulas.length; j++) {
            celulas[j].style.backgroundColor = '';
        }
    }

    if (coluna === colunaAtual) {
        colunaAtiva = false;
        colunaAtual = -1;
        return
    }

    colunaAtiva = true;
    colunaAtual = coluna;
    for (let i = 0; i < linhas.length; i++) {
        const celula = linhas[i].getElementsByTagName('td')[coluna];
        if (celula) {
            if (coluna == 0) {
                celula.style.backgroundColor = 'lightblue';
            } else {
                celula.style.backgroundColor = 'lightgreen';
            }
        }
    }
};