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
            id:conjunto,
            token: resultado
            
    });

});
router.get('/perfil', (req, res) => {
    res.render('perfil', { max: 15 });
});

router.get('/transicion', (req, res) => {
    res.render('tablaT', { max: 15 });
}); 


router.post("/automata", (req, res) => {
   palabra = s(req.body.lineas);
   resultado=palabra[1];
   conjunto=palabra[0];
    
  });

  
module.exports = router;
