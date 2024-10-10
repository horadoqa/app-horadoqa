# SETUP

Projeto: APP-HORADOQA

Criar role-ssm-horadoqa e dicionar permissões:

- AmazonEC2ContainerRegistryFullAccess
- AmazonEC2FullAccess
- AmazonSSMManagedInstanceCore

Criar a instância com 16 GB utilizando a role

Acessar o CloudShell na AWS

## Clonar o projeto

```bash
git clone https://github.com/horadoqa/app-horadoqa.git
```

## Verificar acesso

```bash
aws ecr describe-repositories

{
    "repositories": []
}
```

Mudar para o usuário ec2-user

```bash
sudo su ec2-user
```

Acessar a home

```bash
cd /home/ec2-user
```

## Criar Security-Group

No Console da AWS, acessar o EC2 e depois em Securiy-Group, adicionar o app-horadoqa

Basic details

    Security group name: app-horadoqa
    Description: app-horadoqa
    VPC: Padrão

    Inbound rules
        Type: HTTP
        Protocol: TCP
        Source: Custom
        Port Range: 80
        Description: Acesso app-horadoqa para o mundo
        
        Type: HTTPS
        Protocol: TCP
        Source: Custom
        Port Range: 443
        Description: Acesso app-horadoqa para o mundo

        Type: Custom TCP
        Protocol: TCP
        Source: Custom
        Port Range: 3000
        Description: Acesso app-horadoqa para o mundo
        
        Type: Custom TCP
        Protocol: TCP
        Source: Custom
        Port Range: 5000
        Description: Acesso ao Backend

        Type: PostgreSQL
        Protocol: TCP
        Source: Custom
        Port Range: 5432
        Description: Acesso ao Backend

    Regras de saída
        Type: TCP personalizado
        Source Type: Personalizado
        Intervalo de portas:
        Description:




## Acessar a instância via SSM

Clicar na instância criada `app-horadoqa` e depois em Conectar. 

Procurar por Session Manager e finalmente clicar em conectar

Trocar para o usuário ec2-user

```bash
sudo su ec2-user
```
[ec2-user@<IP PRIVADO> ~]$

## Acessar a home

```bash
cd /home/ec2-user
```

## Verificar se o docker e o docker compose estão instalados

```bash
docker --version && docker compose version

Docker version 25.0.5, build 5dc9bcc
Docker Compose version v2.23.3
```

## Subindo o projeto

Clonar o projeto

```bash
git clone https://github.com/horadoqa/app-horadoqa.git
```

Na pasta app-horadoqa

```bash
docker compose up -d

 ✔ Network app-horadoqa_default       Created 0.2s
 ✔ Container app-horadoqa-frontend-1  Started 0.1s
 ✔ Container app-horadoqa-db-1        Started 0.1s
 ✔ Container app-horadoqa-backend-1   Started 0.0s
```

## Após qualquer mudança

```bash
docker compose down
docker compose up -d
```

## Acessar via browser

http://<IP Público>

```bash
curl -I http://<IP Público>

HTTP/1.1 200 OK
Server: nginx/1.27.2
Date: Thu, 03 Oct 2024 18:58:40 GMT
Content-Type: text/html
Content-Length: 595
Last-Modified: Thu, 03 Oct 2024 18:57:51 GMT
Connection: keep-alive
ETag: "66fee92f-253"
Accept-Ranges: bytes
```

## Verificar a conexão do FE com o BE

docker ps -a

```bash
docker exec -it <backend_container_id> sh

curl http://frontend:80
```


