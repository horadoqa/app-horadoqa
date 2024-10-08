# Variáveis de Ambiente

Para criar variáveis de ambiente no backend (BE) e usar com a biblioteca pg (PostgreSQL) em um projeto Node.js, siga os passos abaixo:

1. Instalar o dotenv

```bash
npm install dotenv
```

2. Criar um arquivo .env

Na raiz do seu projeto, crie um arquivo chamado .env. Insira suas variáveis de ambiente conforme abaixo:

    DB_USER=horadoqa
    DB_HOST=db
    DB_DATABASE=horadoqa
    DB_PASSWORD=senha
    DB_PORT=5432

3. Configurar o arquivo de conexão

Agora, você pode usar as variáveis de ambiente no seu arquivo de configuração do banco de dados. Certifique-se de carregar as variáveis de ambiente antes de usá-las.

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

