//imports
const path = require('path');
const express = require('express');
const app = express();


//configutacion
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.set('port', 3300);

//rutas
app.use(require('./routes/rutas'));
//middleware
app.use(express.static(path.join(__dirname, 'public')));

//escucha
app.listen(app.get('port'), () => {
    console.log('escuchando', app.get('port'))
    console.log(__filename);
});