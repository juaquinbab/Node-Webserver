
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

.listen(8080);

console.log('Escuchando el puerto',  8080);