const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const { createClient } = require('redis');

const app = express();
const port = process.env.PORT || 5000;
const ip = process.env.BACKEND_URL || '0.0.0.0';

const pool = new Pool({
  user: process.env.DB_USER || 'horadoqa',
  host: 'db',
  database: 'horadoqa',
  password: '1q2w3e4r',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conectado ao banco de dados com sucesso'))
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  });

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => {
  console.error('Erro no Redis:', err);
});

const connectToRedis = async () => {
  while (true) {
    try {
      await redisClient.connect();
      console.log('Conectado ao Redis com sucesso');
      break;
    } catch (err) {
      console.error('Erro ao conectar ao Redis. Tentando novamente...', err);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

connectToRedis();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/cadastro', async (req, res) => {
  const { name, email, telefone } = req.body;

  console.log('Dados recebidos:', req.body);

  try {
    await pool.query(
      'INSERT INTO usuarios (name, email, telefone) VALUES ($1, $2, $3)',
      [name, email, telefone]
    );

    await redisClient.del('usuarios_cache');

    res.status(201).send('Usuário criado com sucesso !!!');
  } catch (error) {
    console.error('Erro ao inserir no banco:', error.message);
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
    const cachedData = await redisClient.get('usuarios_cache');

    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    } else {
      const result = await pool.query('SELECT * FROM usuarios');
      await redisClient.setEx('usuarios_cache', 60, JSON.stringify(result.rows));
      res.json(result.rows);
    }
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro ao buscar usuários');
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

    await redisClient.del('usuarios_cache');

    res.send('Usuário deletado com sucesso !!!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error.message);
    res.status(500).send('Erro ao deletar usuário');
  }
});

// Middleware para tratamento de erros
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Erro interno do servidor');
};

app.use(errorHandler);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
});
