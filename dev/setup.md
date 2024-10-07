# DEV

## Executando em ambiente DEV (Local)

´´´bash
docker compose up -d

 ✔ Container dev-frontend-1  Running   0.0s 
 ✔ Container dev-db-1        Started   1.6s 
 ✔ Container dev-backend-1   Started   7.1s  
´´´

## verificar o container

´´´bash
docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                  PORTS                    NAMES
37c78355bd8d   dev-backend    "docker-entrypoint.s…"   53 seconds ago   Up 51 seconds           0.0.0.0:5000->5000/tcp   dev-backend-1
eb4671831022   postgres:13    "docker-entrypoint.s…"   53 seconds ago   Up 52 seconds           0.0.0.0:5432->5432/tcp   dev-db-1
ac0f87f86821   dev-frontend   "/docker-entrypoint.…"   6 minutes ago    Up 6 minutes            0.0.0.0:80->80/tcp       dev-frontend-1
7172f93ca4df   36a179fcf2e8   "/docker-entrypoint.…"   4 days ago       Exited (0) 4 days ago                            amazing_bassi
´´´

## Acessar pelo browser

http://localhost

## Verificar Logs dos Contêineres

´´´bash
docker logs dev-backend-1

Servidor rodando em http://localhost:5000
Dados recebidos: {
  name: 'Ricardo',
  email: 'rfahham@hotmail.com',
  telefone: '21980025474'
}
Erro ao inserir no banco: password authentication failed for user "postgres"
´´´

´´´bash
docker logs dev-db-1
´´´

## Testar Conectividade entre os Contêineres

### Acessar o container do FE

´´´bash
docker exec -it <CONTAINER ID> bash
´´´

### BE => Banco

Acessar o container do FE

´´´bash
docker exec -it <CONTAINER ID> bash

docker exec -it dev-backend-1 /bin/sh
docker exec -it dev-backend-1 /bin/bash
´´´
(dependendo da imagem que você está usando, o shell pode ser sh ou bash).


´´´bash
curl -X POST http://54.174.75.247:5000/api/cadastro -H "Content-Type: application/json" -d '{"name": "Nome", "email": "email@example.com", "telefone": "1234567890"}'
´´´

## Acessando o container do Banco de Dados

´´´bash
docker exec -it dev-db-1 psql -U postgres -W horadoqa
´´´

docker exec -it dev-db-1 psql -h localhost -U postgres -d horadoqa


## ERROR

Failed to load resource: the server responded with a status of 500 (Internal Server Error)

App.js:32 Erro ao enviar dados

Utilize o IP do Contêiner

## Pegar o IP do container

´´´bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <CONTAINER ID>
´´´

## Acessando o banco 

´´´bash
docker run -it --rm --network container:<CONTAINER ID> postgres:13 psql -h db -U horadoqa -d horadoqa
Password for user horadoqa: 1q2w...
´´´