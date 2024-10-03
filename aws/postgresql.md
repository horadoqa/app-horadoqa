# POSTGRESQL

## Verificar a conexão do BE com o Banco

Conectar-se à Instância usando SSM

Certifique-se de que você está conectado à sua instância EC2 através do SSM. Use o seguinte comando:

```bash
aws ssm start-session --target i-0761991cb958397a5
```

docker ps -a

```bash
docker exec -it 205dc9e112f4 bash
```

Dentro do contêiner, você pode usar um cliente de linha de comando como psql para tentar conectar-se ao banco de dados:

```bash
psql -h db -U postgres -d horadoqa
```

Verificando se criou o banco

\dt

Rodar a migrations para criar a tabela


