const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para Home
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

// Rota para Sobre
router.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'sobre.html'));
});

// Rota para Contato
router.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contato.html'));
});


module.exports = router;
