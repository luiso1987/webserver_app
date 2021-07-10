const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

const data_hbs = {
    nombre: 'Luis Carballo',
    titulo: 'Curso de NodeJS'
};

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use( express.static('public') );


app.get('/', (req, res) => {
    res.render('home', data_hbs);
});

app.get('/generic', (req, res) => {
    res.render('generic', data_hbs);
});

app.get('/elements', (req, res) => {
    res.render('elements', data_hbs);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})