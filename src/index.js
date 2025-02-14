const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'static', 'index.html'));
});

/*Enrutamientos para Gobierno municipal */

app.listen(3000);

console.log(`Server on port ${3000}`)