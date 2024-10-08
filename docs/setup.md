# DEV

## Executando em ambiente DEV (Local)

´´´bash
cd dev
´´´

´´´bash
docker compose up -d

 ✔ Container dev-frontend-1   Started   0.8s 
 ✔ Container dev-db-1         Started   0.8s 
 ✔ Container dev-backend-1    Started   1.0s
´´´

## docker compose build

Quando realizar alguma alteração no Dockerfile ou nos arquivos que afetam as dependências da imagem e deseja garantir que as últimas mudanças sejam aplicadas.

´´´bash
docker-compose up --build
´´´

## Listar as imagens

´´´bash
docker images
REPOSITORY     TAG       IMAGE ID       CREATED         SIZE
dev-backend    latest    9794c77fbcb3   4 minutes ago   1.11GB
dev-frontend   latest    bdd5cc0e9b9d   4 days ago      48.2MB
postgres       13        d76feacfc4a6   2 months ago    419MB
´´´

## verificar o container

´´´bash
docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                    NAMES
cabba55079b7   dev-backend    "docker-entrypoint.s…"   7 minutes ago   Up 6 minutes   0.0.0.0:5000->5000/tcp   dev-backend-1
b776f91d010a   postgres:13    "docker-entrypoint.s…"   7 minutes ago   Up 6 minutes   0.0.0.0:5432->5432/tcp   dev-db-1
8b59b1362972   dev-frontend   "/docker-entrypoint.…"   7 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp       dev-frontend-1
´´´

## Acessar pelo browser

http://localhost

## Criando a tabela manualmente no banco

´´´bash
docker run -it --rm --network container:b776f91d010a postgres:13 psql -h db -U horadoqa -d horadoqa
Password for user horadoqa: senha
´´´

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

## Listar todos os registros

```bash
SELECT * FROM usuarios;
 id | name | email | telefone 
----+------+-------+----------
(0 rows)
```

Preencher os dados no site: http://localhost

Dados enviados com sucesso!

```bash
SELECT * FROM usuarios;
 id |    name    |       email        |   telefone   
----+------------+--------------------+--------------
  1 | Hora do QA | horadoqa@gmail.com | 219876543210
(1 row)
```

## Verificar se o healthcheck está respondendo

´´´bash
✗ curl -I http://localhost:5000/healthcheck
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 10
ETag: W/"a-/pJpnCGd2a5qaFT/HIH61Dgm78o"
Date: Mon, 07 Oct 2024 22:06:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
´´´

## Verificar se a página da lista de usuários está respondendo

´´´bash
curl -I http://localhost/usuarios  
HTTP/1.1 200 OK
Server: nginx/1.27.2
Date: Tue, 08 Oct 2024 00:24:32 GMT
Content-Type: text/html
Content-Length: 549
Last-Modified: Tue, 08 Oct 2024 00:11:42 GMT
Connection: keep-alive
ETag: "670478be-225"
Accept-Ranges: bytes
´´´

## Verificar Logs dos Contêineres

´´´bash
docker logs dev-backend-1

Servidor rodando em http://localhost:5000

Dados recebidos: {
  name: 'Hora do QA',
  email: 'horadoqa@gmail.com',
  telefone: '219876543210'
}
´´´

## Verificando os logs do Banco de Dados

´´´bash
docker logs dev-db-1
´´´

## Rota dos usuários

´´´bash
curl http://localhost:5000/api/usuarios | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   169  100   169    0     0  17679      0 --:--:-- --:--:-- --:--:-- 18777
[
  {
    "id": 1,
    "name": "Hora do QA",
    "email": "horadoqa@gmail.com",
    "telefone": "219876543210"
  }
]
´´´

## Para remover um registro de uma tabela no PostgreSQL pelo ID, você pode usar o seguinte comando SQL:

´´´bash
DELETE FROM nome_da_tabela WHERE id = valor_do_id;
´´´

Por exemplo, se você tiver uma tabela chamada usuarios e quiser remover um usuário com o ID 1, o comando seria:

´´´bash
DELETE FROM usuarios WHERE id = 1;
´´´

## Stopar conatiners

´´´bash
docker stop <CONTAINER ID>
´´´

## Apagar containers

´´´bash
docker rm <CONTAINER ID>
´´´

## Apagar imagens

´´´bash
docker rmi <IMAGE ID> -f
´´´

## DOCKER HUB

´´´bash
docker login
docker tag dev-frontend horadoqa/dev-frontend:latest
docker tag dev-backend horadoqa/dev-backend:latest

docker push horadoqa/dev-frontend:latest
docker push horadoqa/dev-backend:latest
´´´

## Exportar o Banco de Dados

´´´bash
docker exec -t dev-db-1 pg_dumpall -c -U horadoqa > database/backup.sql
´´´

docker build -t horadoqa/postgres-com-backup .

## Executar com variáveis de ambiente

´´´bash
docker run -e POSTGRES_USER=horadoqa -e POSTGRES_PASSWORD=senha -e POSTGRES_DB=horadoqa postgres:13
´´´

## Copiar o banco local para o remoto

Criar um DOKCKERFILE na pasta database

COPY backup.sql /docker-entrypoint-initdb.d/