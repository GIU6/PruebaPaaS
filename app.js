const express = require('express');
const {CosmoClieb¿nt}
const app = express();
const port=process.env.PORT || 3000;


//CONFIGURACIÓN DE COSMO BD
const cosmos.Client-new CosmoClient(process.env.COSMO_BD_CONNETION_STRNG);
const database-cosmoClien.databaset(''
app.get('/', (req, res) => {
    res.send('Hola estamos en SENATI desplegando nuestro PaaS 2025')
});
//CONFIGURACIÓN DE COSMO BD
app.listen(port, () => {
    console.log('Aplicacion esuchando en el puerto: ',port)
});
