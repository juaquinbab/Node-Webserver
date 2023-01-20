
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// 

// Servir contenido 

app.use( express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
       nombre: 'Camilo Jimenez',
       titulo: 'Alba Films'

  });
});

app.get('/home', (req, res) => {
  res.render('home', {
       nombre: 'Camilo Jimenez',
       titulo: 'Alba Films'

  });
});

app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Camilo Jimenez',
    titulo: 'Alba Films'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Camilo Jimenez',
    titulo: 'Alba Films'
  });
});

app.get('*', (req, res) => {
    res.send('Esta Pagina no existe');
  });

app.listen(port, () => {

console.log(`La aplicacion esta corriendo en el puerto ${port}`)
})