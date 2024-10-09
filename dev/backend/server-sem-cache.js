const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;
const ip = "localhost";

// Configurar o Pool do PostgreSQL
const pool = new Pool({
  user: 'horadoqa',
  host: 'db',
  database: 'horadoqa',
  password: 'senha',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conectado ao banco de dados com sucesso'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

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
    res.status(201).send('Usuário criado com sucesso !!!');
  } catch (error) {
    console.error('Erro ao inserir no banco:', error.message); // Log do erro
    res.status(500).send('Erro ao criar usuário');
  }
});

// Rota para o healthcheck
app.get('/healthcheck', (req, res) => {
  res.send('WORKING...');
});

// Rota para listar os usuários
app.get('/api/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar usuários, verifique se o banco foi criado...');
  }
});

// Rota para deletar um usuário pelo ID
app.delete('/api/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.send('Usuário deletado com sucesso !!!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error.message); // Log do erro
    res.status(500).send('Erro ao deletar usuário');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
});
