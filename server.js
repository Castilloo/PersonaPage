const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'))
});

app.listen(3000, () => {console.log('El server está corriendo en el puerto 3000');})