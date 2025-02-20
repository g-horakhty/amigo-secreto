// Declaração do array para armazenar os nomes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Valor do campo de entrada
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome de amigos
    amigos.push(nome);

    // Limpa a entrada
    input.value = "";

    // Atualiza a lista de amigos
    atualizarListaAmigos();
}

// Função para atualizar a lista na tela
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    // Limpa a lista
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome como um elemento <li> do arquivo html fornecido
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

// Função para sortear
function sortearAmigo() {
    // Verifica se tem amigos
    if (amigos.length === 0) {
        alert("Por favor, para sotear, adicione amigos antes de sortear.");
        return;
    }

    // Geração aleatória
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém um nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Mostra o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
