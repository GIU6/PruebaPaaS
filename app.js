const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hola estamos en SENATI desplegando nuestro PaaS 2025')
});

app.listen(port,() => {
    crossOriginIsolated.log ('Aplicación escucjando en el porto $(port)');
});