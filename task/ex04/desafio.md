1) Ordenando livros por preço
Você recebeu uma nova demanda! A nova funcionalidade solicitada é a capacidade de ordenar os livros pelo preço, do menor para o maior, utilizando um botão. Ao clicar nesse botão, os livros devem ser reordenados imediatamente na tela. Utilize o método sort do JavaScript para implementar esta funcionalidade. Lembre-se de que os livros estão armazenados em uma array chamada livros, onde cada livro é um objeto que inclui, entre outras propriedades, um preço.

Para completar esta tarefa, você precisará:

Capturar o evento de clique no botão de ordenação por preço;
Implementar a lógica de ordenação dos livros por preço, do menor para o maior;
Exibir os livros ordenados na tela.
Assuma que a função exibirOsLivrosNaTela(livrosOrdenados) já está disponível para uso.

2) Indicando disponibilidade de livros na biblioteca virtual
A próxima funcionalidade requerida é indicar, aos usuários, se um livro está disponível ou não, com base na quantidade em estoque:

Livros com quantidade maior que 0: devem ser exibidos normalmente, sinalizando que estão disponíveis.
Livros com quantidade igual a 0 ou negativa: a imagem do livro deve ter sua opacidade alterada, indicando que está indisponível.
Você precisa implementar essa lógica utilizando o operador ternário em JavaScript para modificar a classe das imagens dos livros, dependendo da sua disponibilidade. Assuma que a lista de livros é uma array de objetos livros, onde cada objeto contém, entre outras propriedades, a quantidade que indica o estoque do livro.

Para completar esta tarefa, você deve:

Percorrer a lista de livros utilizando forEach;
Para cada livro, utilizar o operador ternário para verificar a disponibilidade (quantidade > 0);
Dependendo do resultado, atribuir a classe correspondente à imagem do livro para alterar sua opacidade (por exemplo, livro__imagem para disponível e livro__imagem--indisponivel para indisponível);
Atualizar o DOM para refletir essas mudanças.

3) Filtrando livros disponíveis na biblioteca virtual
Imagine que você está desenvolvendo uma funcionalidade adicional para a biblioteca virtual AluraBooks, onde os usuários podem clicar em um botão "Livros disponíveis" para filtrar e visualizar apenas os livros que estão disponíveis em estoque. A disponibilidade é determinada pela quantidade de livros maior que zero. Utilizando o conhecimento em JavaScript, você precisa implementar essa lógica de filtragem.

Para realizar esta tarefa, você deve:

Capturar o evento de clique no botão "Livros disponíveis";
Implementar a lógica que verifica a disponibilidade dos livros (quantidade > 0) e filtra apenas os livros disponíveis;
Exibir os livros disponíveis na tela, utilizando a função já existente exibirOsLivrosNaTela(livrosFiltrados).
Considere que a lista de livros está disponível em um array chamado livros, onde cada livro é um objeto que inclui uma propriedade quantidade representando o estoque do livro.