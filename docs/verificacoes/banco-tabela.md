# Verificando o banco e a tabela do PostgreSQL

```bash
docker exec -it app-horadoqa-db-1 psql -U horadoqa -d horadoqa
```

Crie a tabela

```bash
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL
);
```

Verifique se a tabela foi criada

```bash
\dt
```

## Listar todos os registros

```bash
SELECT * FROM usuarios;
 id | name | email | telefone 
----+------+-------+----------
(0 rows)
```

docker exec -it app-horadoqa-db-1 /bin/bash
psql -U horadoqa -d horadoqa
SELECT * FROM usuarios;
