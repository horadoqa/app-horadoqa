const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Configurar o Pool do PostgreSQL
const pool = new Pool({
  user: 'horadoqa',
  host: 'localhost',
  database: 'horadoqa',
  password: 'horadoqa5474',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/api/cadastro', async (req, res) => {
  const { name, email, telefone } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (name, email, telefone) VALUES ($1, $2, $3)',
      [name, email, telefone]
    );
    res.status(201).send('Usuário criado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar usuário');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
