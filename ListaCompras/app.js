const enviarLista = () => {
    const form = document.getElementById('listaComprasForm');
    const listaCompras = document.getElementById('listaCompras');
    listaCompras.innerHTML = ''; 

    for (let i = 0; i < 10; i++) {
        const itemName = form['item' + (i + 1)].value;
        if (itemName != '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemName;
            listaCompras.appendChild(listItem);
        }
    }
    const botaoLimparLista = document.getElementById('botaoLimparLista');
    botaoLimparLista.classList.remove('invisivel');
};

const limparCampos = () => {
    const form = document.getElementById('listaComprasForm');
    for (let i = 0; i < 10; i++) {
        form['item' + (i + 1)].value = ''; 
    }
}; 

const limparLista = () => {
    const listaCompras = document.getElementById('listaCompras');
    listaCompras.innerHTML = '';

    const botaoLimparLista = document.getElementById('botaoLimparLista');
    botaoLimparLista.classList.add('invisivel');
}