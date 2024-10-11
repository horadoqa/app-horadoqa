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

# Lista o Instance ID
instance_id=$(aws ec2 describe-instances --query "Reservations[*].Instances[*].InstanceId" --output text --profile horadoqa-dev | head -n 1)

# pega o IP Público da instância
ip=$(aws ec2 describe-instances --instance-ids ${instance_id} --query "Reservations[*].Instances[*].PublicIpAddress" --output text --profile horadoqa-dev)

docker compose up -d



instance-id = i-056d6e0777af6c878

aws ec2 describe-instances --instance-ids ${instance-id} --query "Reservations[*].Instances[*].PublicIpAddress" --output text

ip = aws ec2 describe-instances --instance-ids i-056d6e0777af6c878 --query "Reservations[*].Instances[*].PublicIpAddress" --output text --profile horadoqa-dev

Se você deseja listar o IP público de todas as instâncias, pode usar:

aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId, PublicIpAddress]" --output table --profile horadoqa-dev
