//imports

const express = require ('express');
const app = express();

//rutas
app.get('/',(req,res)=>{
    res.send('<h1>Servidor </h1>');
});

app.get('/next',(req,res)=>{
    res.send('<h1>Servidor2 </h1>');
});
//configutacion

app.set('port',3000);
 
//escucha
app.listen(app.get('port'),()=>{
    console.log('escuchando',app.get('port'))

})