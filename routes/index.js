const express = require('express'); 

const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('home', obj);

});

router.get('/pagina2', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('page2', obj);

});

router.get('/pagina3', (req, res) => {
    let obj = {
        'nome': req.query.nome
    };
    res.render('page3', obj);

});

module.exports = router; 