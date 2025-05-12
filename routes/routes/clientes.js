var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Clientes' });
});

/* GET home page. */
router.get('/vip', function(req, res, next) {
  res.render('index', { title: 'Clientes VIP' });
});


module.exports = router;
