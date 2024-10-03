# SETUP

Projeto: APP-HORADOQA

Acessar o CloudShell na AWS

## Clonar o projeto

```bash
git clone git@github.com:horadoqa/app-horadoqa.git
```

## Acessar diretório dos scripts

```bash
cd aws/scripts
```

## Executar o script para criação da role ssm

```bash
./criar_role_ssm.sh
```

## Adicionar permissões para o role-acesso-ssm

- AmazonEC2ContainerRegistryFullAccess
- AmazonEC2FullAccess
- AmazonSSMManagedInstanceCore

## Verificar acesso

```bash
aws ecr describe-repositories

{
    "repositories": []
}
```

## Criar Security-Group

No Console da AWS, acessar o EC2 e depois em Securiy-Group, adicionar o app-horadoqa

Basic details

    Security group name: app-horadoqa
    Description: app-horadoqa
    VPC: Padrão

    Inbound rules
        Type: Custom TCP
        Source Type: Qualquer local-IPv4
        Port Range: 80
        Description: Acesso app-horadoqa para o mundo

    Regras de saída
        Type: TCP personalizado
        Source Type: Personalizado
        Intervalo de portas:
        Description:

## Validar recursos da Zona A

```bash
./validar_recursos_zona_a.sh

./validar_recursos_zona_a.sh 
[OK] Tudo certo com a VPC
[OK] Tudo certo com a Subnet
[OK] Security Group app-horadoqa foi criado
 [OK] Regra de entrada está ok
 [OK] Regra de saída está correta
[OK] Tudo certo com a role 'role-acesso-ssm'
```

## Criar a instância via script
```bash
./lancar_ec2_zona_a.sh
```

## Acessar a instância via SSM

Clicar na instância criada `app-horadoqa` e depois em Conectar. 

Procurar por Session Manager e finalmente clicar em conectar

Trocar para o usuário ec2-user

```bash
sudo su ec2-user
```
[ec2-user@ip-172-31-95-38 ~]$

## Acessar a home

cd /home/ec2-user

## Verificar se o docker está instalado

```bash
docker --version
Docker version 25.0.5, build 5dc9bcc
```

## Verificar se o docker compose está instalado

```bash
docker compose version
Docker Compose version v2.23.3
```

## Subindo o projeto

Clonar o projeto

```bash
git clone git@github.com:horadoqa/app-horadoqa.git
```

Na pasta app-horadoqa/Dockerfile

```bash
docker compose up -d

 ✔ Network app-horadoqa_default       Created 0.2s
 ✔ Container app-horadoqa-frontend-1  Started 0.1s
 ✔ Container app-horadoqa-db-1        Started 0.1s
 ✔ Container app-horadoqa-backend-1   Started 0.0s
```

## Após qualquer mudaça

```bash
docker compose down
docker-compose up -d
```

## Acessar via browser

http://<IP Público>