# REDIS

## Instalar o Redis e o cliente Redis para Node.js

```bash
sudo apt update
sudo apt install redis-server
sudo systemctl start redis
```

## Testando o Redis
```bash
redis-cli                    
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> 
```


```bash
npm install redis
npm install node-cache
```

const redis = require('redis');

// Configurar o Redis
const redisClient = redis.createClient();
redisClient.on('error', (err) => console.error('Erro no Redis:', err));



Implementar o cache

const NodeCache = require('node-cache');
const myCache = new NodeCache();

// Rota para listar os usuários com caching
app.get('/api/usuarios', async (req, res) => {
  const cacheKey = 'usuarios';
  const cachedData = myCache.get(cacheKey);

  if (cachedData) {
    // Se o cache existir, retorna os dados do cache
    return res.json(cachedData);
  } else {
    // Se não existir, busca no banco de dados
    try {
      const result = await pool.query('SELECT * FROM usuarios');
      myCache.set(cacheKey, result.rows, 3600); // Cacheia por 1 hora
      return res.json(result.rows);
    } catch (error) {
      console.error(error);
      return res.status(500).send('Erro ao buscar usuários');
    }
  }
});


