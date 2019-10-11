const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
const s= require("../Clases/anlizador");
var resultado;
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/resultado', (req, res) => {
        res.status(200).json({
            id: resultado

    });

});
router.get('/perfil', (req, res) => {
    res.render('perfil', { max: 15 });
});

router.post("/automata", (req, res) => { 
   resultado=s(req.body.lineas);
    
  });

  
module.exports = router;
