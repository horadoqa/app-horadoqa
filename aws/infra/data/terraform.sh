#!/bin/bash

# Atualiza a lista de pacotes
echo "Atualizando a lista de pacotes..."
sudo apt update

# Instala dependências
echo "Instalando dependências..."
sudo apt install -y wget unzip

# Define a versão do Terraform
TERRAFORM_VERSION="1.9.7" # Altere para a versão desejada

# Faz o download do Terraform
echo "Baixando o Terraform versão $TERRAFORM_VERSION..."
wget "https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip"

# Descompacta o arquivo
echo "Descompactando o arquivo..."
unzip "terraform_${TERRAFORM_VERSION}_linux_amd64.zip"

# Move o executável para /usr/local/bin
echo "Movendo o executável do Terraform para /usr/local/bin..."
sudo mv terraform /usr/local/bin/

# Verifica a instalação
echo "Verificando a instalação do Terraform..."
terraform -version

# Limpa o arquivo zip
echo "Removendo o arquivo zip..."
rm "terraform_${TERRAFORM_VERSION}_linux_amd64.zip"

echo "Instalação do Terraform concluída!"
