#!/bin/bash

# Defina suas variáveis
IMAGE_NAME="<your-image-name>"
REGION="<your-region>"
ACCOUNT_ID="<your-account-id>"

# Construir a imagem Docker
echo "Construindo a imagem Docker..."
docker build -t $IMAGE_NAME .

# Login no ECR
echo "Fazendo login no Amazon ECR..."
$(aws ecr get-login --no-include-email --region $REGION)

# Tag da imagem
echo "Tagueando a imagem Docker..."
docker tag $IMAGE_NAME:latest $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:latest

# Fazer push da imagem para o ECR
echo "Fazendo push da imagem para o Amazon ECR..."
docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:latest

echo "Deploy concluído com sucesso!"
