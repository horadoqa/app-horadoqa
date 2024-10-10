const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const { createClient } = require('redis'); // Importação do cliente Redis

const app = express();
const port = 5000;
const ip = "localhost";

// Configurar o Pool do PostgreSQL
const pool = new Pool({
  user: 'horadoqa',
  host: 'db',
  database: 'horadoqa',
  password: '1q2w3e4r',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conectado ao banco de dados com sucesso'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Configurar o cliente Redis
const redisClient = createClient({
  url: process.env.REDIS_URL
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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes de tentar novamente
    }
  }
};

connectToRedis();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/api/cadastro', async (req, res) => {
  const { name, email, telefone } = req.body;

  console.log('Dados recebidos:', req.body); // Log dos dados recebidos

  try {
    await pool.query(
      'INSERT INTO usuarios (name, email, telefone) VALUES ($1, $2, $3)',
      [name, email, telefone]
    );

    // Limpar o cache de usuários após a inserção
    await redisClient.del('usuarios_cache');

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
    // Tentar obter os dados do cache
    const cachedData = await redisClient.get('usuarios_cache');

    if (cachedData) {
      // Se houver dados em cache, retornar os dados
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      console.log(`Dados retornados do cache em ${formattedDate}`);

      return res.json(JSON.parse(cachedData));
    } else {
      // Caso contrário, buscar no banco de dados
      const result = await pool.query('SELECT * FROM usuarios');

      // Armazenar no cache por 60 segundos
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

    // Limpar o cache de usuários após a deleção
    await redisClient.del('usuarios_cache');

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
