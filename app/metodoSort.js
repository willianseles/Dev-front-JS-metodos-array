let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b )=> a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdenados)
}