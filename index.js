const express = require('express');
const app = express();
const port = 9090;
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', { title: 'Escribe tu nombre' });
});

app.get('/hola', function(req, res) {
    res.render('hola', { mensaje: req.query['nombre'] });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})