# BACKUP

Acessar o banco

```bash
docker exec -it prod-db-1 psql -U horadoqa -d horadoqa
docker exec -it dev-db-1 psql -U horadoqa -d horadoqa
```

Visualizar o banco

```bash
SHOW data_directory;
    data_directory      
--------------------------
 /var/lib/postgresql/data
(1 row)
```

Acessar o Container

```bash
docker exec -it dev-db-1 bash

pg_dump -U horadoqa -d horadoqa > ~/backup.sql

ls -la ~/backup.sql

drwx------ 1 root root 4096 Oct 16 21:22 .
drwxr-xr-x 1 root root 4096 Oct 16 21:30 ..
-rw-r--r-- 1 root root 3389 Oct 16 21:30 backup.sql
```

Fazer a cópia do arquivo

```bash
docker cp dev-db-1:/root/backup.sql /home/rfahham/projetos/app-horadoqa/dev/backend/backup.sql             
Successfully copied 5.12kB to /home/rfahham/projetos/app-horadoqa/dev/backend/backup.sql
```