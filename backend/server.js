const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;
const ip = "localhost";

// Configurar o Pool do PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'horadoqa',
  password: 'senha@db',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/api/cadastro', async (req, res) => {
  const { name, email, telefone } = req.body;

  console.log('Dados recebidos:', req.body); // Log dos dados recebidos

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (name, email, telefone) VALUES ($1, $2, $3)',
      [name, email, telefone]
    );
    res.status(201).send('Usuário criado com sucesso');
  } catch (error) {
    console.error('Erro ao inserir no banco:', error.message); // Log do erro
    res.status(500).send('Erro ao criar usuário');
  }
});

// Rota para listar os usuários
app.get('/api/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
});
