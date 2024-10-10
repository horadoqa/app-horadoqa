# Verifique se o Redis está Funcionando

Instalar 

```bash
npm install redis
```

Versão

```bash
redis-server --version
Redis server v=6.0.16 sha=00000000:0 malloc=jemalloc-5.2.1 bits=64 build=a3fdef44459b3ad6
```

Teste o Redis Manualmente

```bash
redis-cli -h localhost -p 6379

redis-cli -h 127.0.0.1 -p 6379 ping
PONG

exit
```

Verifique Dependências

```bash
npm list redis                     
be@1.0.0 /home/rfahham/projetos/app-horadoqa/dev/backend
└── redis@4.7.0
```

```bash
npm list redis
be@1.0.0 /home/rfahham/projetos/app-horadoqa/dev/backend
└── redis@4.7.0 extraneous
```

A mensagem "extraneous" indica que o pacote Redis não está listado nas dependências do seu package.json, mas está instalado na pasta node_modules. Isso pode causar problemas de compatibilidade ou configuração.

Verifique a Instalação do Redis

```bash
sudo systemctl status redis

[sudo] password for rfahham: 
● redis-server.service - Advanced key-value store
     Loaded: loaded (/lib/systemd/system/redis-server.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2024-10-09 06:06:41 -03; 5h 58min ago
       Docs: http://redis.io/documentation,
             man:redis-server(1)
   Main PID: 258 (redis-server)
     Status: "Ready to accept connections"
      Tasks: 5 (limit: 9433)
     Memory: 13.9M
     CGroup: /system.slice/redis-server.service
             └─258 "/usr/bin/redis-server 127.0.0.1:6379" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""

Oct 09 06:06:41 DESKTOP-059018K systemd[1]: Starting Advanced key-value store...
Oct 09 06:06:41 DESKTOP-059018K systemd[1]: Started Advanced key-value store.
```


Com telnet e redis-cli

docker exec -it <container_id> /bin/bash

docker exec -it app-horadoqa-redis-1 /bin/bash

docker exec -it app-horadoqa-redis-1 /bin/sh

ping redis
"redis"

docker exec -it app-horadoqa-redis-1 redis-cli

