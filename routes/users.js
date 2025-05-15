var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Paulo', time: 'Inter' },
      { id: 2, nome: 'Pedro', time: 'Inter' },
      { id: 3, nome: 'Gabriel', time: 'Inter' },
      { id: 4, nome: 'João', time: 'Inter' },
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus Usuarios',
      usuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
