// Array de objetos representando os livros
const livros = [
  { nome: 'Livro A', preco: 40 },
  { nome: 'Livro B', preco: 60 },
  { nome: 'Livro C', preco: 80 }
];

// Aplicando o desconto de 20% em cada livro
const desconto = 0.2;
const livrosComDesconto = livros.map(livro => ({
  ...livro,
  preco: (livro.preco - livro.preco * desconto).toFixed(2)
}));

// Exibindo os novos preços
livrosComDesconto.forEach(livro => console.log(`${livro.nome}: R$ ${livro.preco}`));