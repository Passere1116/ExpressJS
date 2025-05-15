var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
        { id: 1, produto: 'Arroz', preço: 'R$ 20,00', imagem: 'https://static.itdg.com.br/images/360-240/21fd76be3b29c3290859eda5220e0e32/323683-original.jpg' },
        { id: 2, produto: 'Feijão', preço: 'R$ 8,50', imagem: 'https://images.tcdn.com.br/img/img_prod/248016/sementes_feijao_carioca_iac_1849_polaco_caixa_com_3_kg_1461_1_0ac426d58edf1cfa230052226de94391.jpg' },
        { id: 3, produto: 'Macarrão', preço: 'R$ 5,90', imagem: 'https://s2-receitas.glbimg.com/JAZaJrRJpVfXRP1BZwbAsUcuYLw=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/R/X/Lj3rwSQpm7BgzSEvJ1Mw/macarrao-simples-como-fazer.jpg' },
        { id: 4, produto: 'Açúcar', preço: 'R$ 3,50', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQ8OF-LEC0WsQ9Wy0igCHnY0A4K968T3xVQ&s' },
        { id: 5, produto: 'Sal', preço: 'R$ 2,80', imagem: 'https://www.mdsaude.com/wp-content/uploads/sal-imagem2.jpg' },
        { id: 6, produto: 'Óleo de soja', preço: 'R$ 6,90', imagem: 'https://carrefourbrfood.vtexassets.com/arquivos/ids/211616/141836_1.jpg?v=637272514200130000' },
        { id: 7, produto: 'Café', preço: 'R$ 10,00', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG' },
        { id: 8, produto: 'Leite', preço: 'R$ 4,50', imagem: 'https://midias.em.com.br/_midias/jpg/2024/06/30/copo_de_leite-38564104.jpg' },
        { id: 9, produto: 'Queijo', preço: 'R$ 18,00', imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/queijinc/catalog/produtos-2024/ambrosia/queijo-mussarela-zero-lactose-vila-caipira-3.jpg' },
        { id: 10, produto: 'Pão', preço: 'R$ 3,00', imagem: 'https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg' }
    ];

    // 4. Renderizar a view 'produtos.ejs' passando os dados
    res.render('produtos', {
      titulo: 'Meus produtos',
      produtosParaView: meusProdutos // Passando o array para a view
    });
});

module.exports = router;
