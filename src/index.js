//imports

const express = require('express');
const app = express();
const path = require('path');

//rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perfil', (req, res) => {
    res.sendFile(__dirname + "/views/perfil.html");
});

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//configutacion
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.set('port', 3400);

//escucha
app.listen(app.get('port'), () => {
    console.log('escuchando', app.get('port'))
    console.log(__filename);
});