1) Exibindo valores dinâmicos em uma loja virtual
Você está desenvolvendo uma loja virtual de livros. A sua liderança solicitou uma funcionalidade que melhora a experiência do usuário ao filtrar livros por categoria. A ideia é que, ao selecionar uma categoria específica, como "Livros de front-end", "Livros de back-end", "Livros de dados", ou "Todos os livros disponíveis", a página deve atualizar dinamicamente o total do valor dos livros disponíveis para aquela categoria específica, em vez de exibir um valor fixo.

Atualmente, o site sempre mostra "todos os livros disponíveis por R$ 299,00" independentemente da categoria selecionada. Sua tarefa é ajustar o JavaScript para que, ao selecionar uma categoria, o valor total dos livros disponíveis seja calculado dinamicamente com base nos livros que realmente estão sendo exibidos.

Considere que você tem acesso à API que retorna os dados dos livros, utilizada nos exercícios anteriores, incluindo preço e categoria. Use o método fetch para obter esses dados e implemente a lógica para atualizar o valor total exibido na página conforme a categoria selecionada.

1) Exibindo valores dinâmicos em uma loja virtual
Para resolver esta atividade, siga os passos abaixo:

Primeiramente, crie uma função que será responsável por buscar os dados dos livros da API;
Implemente a lógica para filtrar os livros com base na categoria selecionada pelo usuário;
Calcule o valor total dos livros filtrados;
Atualize o elemento HTML que exibe o valor total dos livros disponíveis com o valor calculado.
Aqui está um exemplo de como o código JavaScript poderia ser estruturado:

// Função para buscar os dados dos livros
async function buscarDadosDosLivros() {
    const response = await fetch('url-da-api-de-livros');
    const livros = await response.json();
    return livros;
}

// Função para exibir o valor total dos livros disponíveis
async function exibirValorTotalPorCategoria(categoria) {
    const livros = await buscarDadosDosLivros();
    const livrosFiltrados = livros.filter(livro => livro.categoria === categoria || categoria === 'todos');
    const valorTotal = livrosFiltrados.reduce((total, livro) => total + livro.preco, 0);

    const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis');
    elementoValorTotal.innerHTML = `Todos os livros disponíveis por R$ ${valorTotal.toFixed(2)}`;
}

// Adicione event listeners para os botões de categoria para chamar exibirValorTotalPorCategoria com a categoria apropriada
document.getElementById('botao-categoria-front-end').addEventListener('click', () => exibirValorTotalPorCategoria('front-end'));
document.getElementById('botao-categoria-back-end').addEventListener('click', () => exibirValorTotalPorCategoria('back-end'));
// Adicione event listeners para outras categorias conforme necessário

Neste código, url-da-api-de-livros deve ser substituída pela URL real da API de livros. A função buscarDadosDosLivros busca todos os livros disponíveis. A função exibirValorTotalPorCategoria filtra esses livros com base na categoria selecionada, calcula o valor total e atualiza a página com este valor. Adicione event listeners para os botões de categoria conforme necessário para que a função exibirValorTotalPorCategoria seja chamada com a categoria correta.

2) Calculando o total de compras
Você está desenvolvendo um carrinho de compras para um e-commerce de livros. A cada livro adicionado ao carrinho, o sistema deve calcular e exibir o valor total das compras em tempo real. Para cumprir essa demanda, você utilizará o método reduce, que permite somar todos os preços dos livros presentes no carrinho, resultando no valor total da compra.

O desafio é: crie uma função que receba um array de objetos, onde cada objeto representa um livro com seu respectivo preço, e utilize o método reduce para calcular o valor total dos livros no carrinho. A função deverá então atualizar dinamicamente na página o valor total do carrinho de compras.

Considere que cada livro é representado por um objeto com duas propriedades: nome e preco. Você deverá somar o valor de preco de cada livro para obter o total.

2) Calculando o total de compras
Para resolver esta atividade, siga os passos abaixo:

Crie um array de objetos, onde cada objeto representa um livro com um nome e um preco;
Implemente uma função que utilize o método reduce para somar os preços dos livros no array, calculando assim o valor total do carrinho;
Atualize o elemento HTML correspondente com o valor total calculado.
Aqui está um exemplo de como o código JavaScript poderia ser estruturado:

// Array de objetos representando os livros no carrinho
const livrosNoCarrinho = [
    { nome: 'Livro de JavaScript', preco: 30 },
    { nome: 'Livro de HTML', preco: 20 },
    { nome: 'Livro de CSS', preco: 25 }
];

// Função para calcular o valor total do carrinho
function calcularValorTotalDoCarrinho(livros) {
    const valorTotal = livros.reduce((acc, livroAtual) => acc + livroAtual.preco, 0);
    document.getElementById('valor-total').innerText = `Valor total: R$ ${valorTotal}`;
}

// Chamada da função passando o array de livros como argumento
calcularValorTotalDoCarrinho(livrosNoCarrinho);

Neste exemplo, valor-total deve ser o ID do elemento HTML onde você deseja exibir o valor total do carrinho. A função calcularValorTotalDoCarrinho itera sobre cada livro no array livrosNoCarrinho, somando seus preços com o auxílio do método reduce. O segundo argumento de reduce (0) é o valor inicial do acumulador acc, garantindo que a soma comece de zero. Finalmente, o valor total é exibido dinamicamente na página.