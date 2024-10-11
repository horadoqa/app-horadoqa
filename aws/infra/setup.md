# SETUP

Criar usuário na AWS com a seguinte credencial:

horadoqa-dev 

AmazonEC2FullAccess
AmazonEC2ContainerRegistryFullAccess
AmazonSSMManagedInstanceCore
IAMFullAccess


## Listar credenciais

```bash
cat ~/.aws/credentials
```

Criar um profile

```bash
aws configure --profile nome_do_seu_profile
```

Ao executar esse comando, você será solicitado a inserir as seguintes informações:

- AWS Access Key ID: Sua chave de acesso.
- AWS Secret Access Key: Sua chave secreta.
- Default region name: A região padrão que você deseja usar (ex: us-east-1).
- Default output format: O formato de saída padrão (ex: json, text, table).

## Utilizando o terraform 

- terraform init
- terraform plan
- terraform apply

Conectar a instância

Mudar de usuário

Mudar para o usuário ec2-user

```bash
sudo su ec2-user
```

Acessar a home

```bash
cd /home/ec2-user
```

## Clonar o projeto

```bash
git clone https://github.com/horadoqa/app-horadoqa.git
```

cd app-horadoqa/prod

docker compose up -d