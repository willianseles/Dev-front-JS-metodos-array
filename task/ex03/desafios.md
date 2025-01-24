1) Filtrando livros por categoria
Imagine que você está desenvolvendo uma biblioteca virtual e deseja implementar uma funcionalidade que permita aos usuários filtrar livros por categoria (front-end, back-end, dados) por meio de botões. Ao clicar em um desses botões, apenas os livros da categoria selecionada devem ser exibidos na tela. Você já possui uma lista de livros disponível em uma variável chamada livros, onde cada livro é um objeto que contém, entre outras informações, a categoria à qual pertence. Sua tarefa é utilizar o método filter para implementar essa funcionalidade de filtragem.

Veja as instruções deste exercício:

Capture o evento de clique em cada um dos botões de categoria;
Filtre a lista de livros com base na categoria associada ao botão clicado;
Vamos supor que os botões já estão marcados no seu HTML com classes específicas para cada categoria, por exemplo, btn-front-end, btn-back-end, e btn-dados. Além disso, considere que você tem uma função exibirLivros(listaLivros) que recebe uma lista de livros e os exibe na tela.
2) Exibindo livros filtrados na tela
Imagine que você está aprimorando a funcionalidade de uma biblioteca virtual que permite aos usuários filtrar livros por categoria por meio de botões. Cada vez que um botão de categoria é clicado, os livros correspondentes são exibidos na tela. No entanto, um problema surgiu: os livros filtrados se acumulam na tela a cada novo clique, em vez de substituir os livros anteriormente exibidos. Sua tarefa é: corrija esse comportamento, garantindo que apenas os livros da categoria selecionada sejam mostrados, sem repetições.

Considere os seguintes pontos:

Limpe os livros que foram exibidos anteriormente, antes de adicionar os novos livros filtrados na tela;
Você já tem acesso a uma função exibirOsLivrosNaTela(livrosFiltrados) que é responsável por mostrar os livros na tela;
Existe um elemento no HTML no qual os livros são inseridos, que pode ser referenciado como elementoParaInserirLivros.
Sua missão é: ajuste o código para que, antes de exibir os novos livros filtrados, o conteúdo anterior do elementoParaInserirLivros seja limpo.