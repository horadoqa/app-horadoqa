#!/bin/bash

# Lista o Instance ID
instance_id=$(aws ec2 describe-instances --query "Reservations[*].Instances[*].InstanceId" --output text --profile horadoqa-dev | head -n 1)

aws ssm start-session --target ${instance_id} --profile horadoqa-dev

sudo su ec2-user

cd /home/ec2-user

git clone https://github.com/horadoqa/app-horadoqa.git

cd app-horadoqa/prod

find prod -type f -exec sed -i 's/0\.0\.0\.0/34.227.60.55/g' {} +

cat backend/server.js | grep ip

# pega o IP Público da instância
ip=$(aws ec2 describe-instances --instance-ids ${instance_id} --query "Reservations[*].Instances[*].PublicIpAddress" --output text --profile horadoqa-dev)

docker compose up --build