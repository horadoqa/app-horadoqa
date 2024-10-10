const express = require('express');
const app = express();
const port = 5000;

// Rota para o healthcheck
app.get('/healthcheck', (req, res) => {
  res.send('WORKING...');
});

// Rota para o endpoint raiz
app.get('/', (req, res) => {
  res.send('WORKING...');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// node healthcheck.js