const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
const s= require("../Clases/anlizador");
router.get('/', (req, res) => {
    res.render('index');
});


router.get('/perfil', (req, res) => {
    res.render('perfil', { max: 15 });
});

router.post("/automata", (req, res) => { 
   console.log(s("var 9 8"));
    
  });
module.exports = router;
