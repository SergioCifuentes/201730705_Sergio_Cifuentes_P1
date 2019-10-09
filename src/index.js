//imports

const express = require ('express');
const app = express();

//rutas
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/perfil',(req,res)=>{
    res.sendFile(__dirname+"/views/perfil.html");
});
//configutacion
app.set('view engine','ejs');
app.set('views',__dirname+"/views");

app.set('port',3000);
 
//escucha
app.listen(app.get('port'),()=>{
    console.log('escuchando',app.get('port'))
console.log(__filename);
})