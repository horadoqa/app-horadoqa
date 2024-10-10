# Volume

Onde são persistidos os dados

Listar todos os volumes:

```bash
docker volume ls
```

Obter detalhes de um volume específico: Se você quiser ver detalhes de um volume específico, use:

```bash
docker volume inspect app-horadoqa_pgdata 
[
    {
        "CreatedAt": "2024-10-09T13:16:26Z",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "app-horadoqa",
            "com.docker.compose.version": "2.29.1",
            "com.docker.compose.volume": "pgdata"
        },
        "Mountpoint": "/var/lib/docker/volumes/app-horadoqa_pgdata/_data",
        "Name": "app-horadoqa_pgdata",
        "Options": null,
        "Scope": "local"
    }
]
```

Verificar o espaço em disco utilizado pelos volumes: Para ver informações sobre o espaço em disco, você pode usar:

```bash
docker system df -v
```

Remover um volume específico: Se você quiser remover um volume específico, use:

```bash
docker volume rm NOME_DO_VOLUME
```

Remover todos os volumes não utilizados: Para remover todos os volumes que não estão sendo usados por nenhum contêiner, você pode usar:

```bash
docker volume prune
```