# Depurando erros

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
