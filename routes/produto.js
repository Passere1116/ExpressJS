var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
      { id: 1, nome: 'chocolate', preço: '5' },
      { id: 2, nome: 'batata frita', preço: '18' },
      { id: 3, nome: 'hamburguer', preço: '38' },
      { id: 4, nome: 'pizza', preço: '45' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
