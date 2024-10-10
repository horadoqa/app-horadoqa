# Criando a migration

## Instalando dependências
```bash
npm install sequelize pg pg-hstore
```

## Criando a migration

```bash
npx sequelize-cli migration:generate --name create-usuarios
```

## Inicializar o Sequelize

```bash
npx sequelize-cli init
```

## Executar a Migration

```bash
npx sequelize-cli db:migrate
```

Executar o migrations de dentro do container do dev-backend

```bash
docker exec -it <CONTAINER ID> /bin/sh

npm install sequelize sequelize-cli pg pg-hstore

npx sequelize-cli db:migrate
```