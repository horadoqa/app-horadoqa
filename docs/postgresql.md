# POSTGRESQL

## Instalar

```bash
sudo apt install postgresql
```

## Digite o seguinte comando para fazer login como usuário "postgres":

```bash
sudo su - postgres
```

## Agora, você pode usar o comando psql para se conectar ao servidor PostgreSQL localmente:

```bash
psql
```

## Para exibir a versão do PostgreSQL:

```bash
SELECT version();
```

## Para sair do prompt do psql, você pode digitar o comando \q ou pressionar Ctrl+D.

```bash
\q
```

## Criando um Usuário

```bash
CREATE USER <nome_do_usuario>

CREATE USER usuario_dono WITH PASSWORD 'minha_senha';

CREATE ROLE
```

## Dar permissão de criação para este usuário

```bash
ALTER USER horadoqa CREATEDB;

GRANT CREATE ON DATABASE horadoqa TO horadoqa;

GRANT SELECT ON TABLE usuarios TO horadoqa;

GRANT INSERT, UPDATE, DELETE ON TABLE usuarios TO horadoqa;
```

## Listando Usuários e Permissões

```bash
\du
                                   List of roles
 Role name |                         Attributes                         | Member of 
-----------+------------------------------------------------------------+-----------
 horadoqa  | Create DB                                                  | {}
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

## Logando localmente com o usuário criado

```bash
psql -U horadoqa -d horadoqa -W
```

## Excluindo um usuário

```bash
DROP USER <nome_do_usuario>;
```

## Criando um banco de dados

```bash
CREATE DATABASE <nome_do_banco_de_dados>;
CREATE DATABASE
```

Você também pode especificar outras opções ao criar o banco de dados, como a codificação de caracteres, a localidade e as permissões. Aqui está um exemplo:

```bash
CREATE DATABASE horadoqa ENCODING 'UTF8' LC_COLLATE = 'pt_BR.UTF-8' LC_CTYPE = 'pt_BR.UTF-8' OWNER = horadoqa;
```

## Verificando a criação do banco de dados

```bash
\l
                              List of databases
   Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
-----------+----------+----------+---------+---------+-----------------------
 horadoqa  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
 template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
(4 rows)
```

## Alternar entre os bancos de dados disponíveis através do comando:

```bash
\c horadoqa horadoqa;
```

## Excluindo um banco de dados

```bash
DROP DATABASE <nome_do_banco_de_dados>;
```

## Criar a Tabela no PostgreSQL

Certifique-se de ter uma tabela no seu banco de dados PostgreSQL. 

Você pode criar a tabela usuarios usando a seguinte consulta:

```bash
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(15)
  );

CREATE TABLE
```

## Listar as tabelas criadas

```bash
\dt
          List of relations
 Schema |   Name   | Type  |  Owner   
--------+----------+-------+----------
 public | usuarios | table | postgres
(1 row)
```

## listar as colunas da tabela

```bash
\d usuarios
```

## Inserir registro

```bash
INSERT INTO usuarios (name, email, telefone) VALUES ('Ricardo Fahham', 'rfahham@hotmail.com', '219876543210');

INSERT 0 1
```

## Listar todos os registros

```bash
SELECT * FROM usuarios;
```

## Eliminar a tabela existente

```bash
DROP TABLE IF EXISTS usuarios;
```

curl -X POST http://54.174.75.247:5000/api/cadastro -H "Content-Type: application/json" -d '{"name": "Nome", "email": "email@example.com", "telefone": "1234567890"}'