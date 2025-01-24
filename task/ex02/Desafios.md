1) Aplicando descontos com map
Imagine que você está desenvolvendo um sistema de e-commerce para uma livraria online. Uma das funcionalidades desejadas é a aplicação automática de descontos em todos os livros para uma promoção especial. Você deve criar um script em JavaScript que, dado um array de livros, aplique um desconto de 20% em cada livro e exiba o novo preço no console. Cada livro no array é um objeto que possui as propriedades nome e preco. Utilize o método map para aplicar o desconto e forEach para exibir os novos preços.

Para resolver essa atividade, siga os passos abaixo:

. Crie um array de objetos livros, no qual cada objeto representa um livro com nome e preco;
. Utilize o método map para criar um novo array livrosComDesconto, onde cada livro terá o desconto aplicado ao seu preço;

. Para aplicar o desconto, dentro do map, retorne um novo objeto livro com o preço atualizado. Lembre-se de calcular o novo preço subtraindo 20% do preço original;

. Por fim, use forEach para percorrer o array livrosComDesconto e exibir no console o nome e o novo preço de cada livro, formatando o preço para duas casas decimais com .toFixed(2).
