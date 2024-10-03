#!/bin/bash

# Atualiza a lista de pacotes
echo "Atualizando a lista de pacotes..."
sudo apt update

# Instala dependências
echo "Instalando dependências..."
sudo apt install -y wget gnupg

# Adiciona a chave do repositório do MongoDB
echo "Adicionando chave do repositório do MongoDB..."
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg

# Adiciona o repositório do MongoDB à lista de fontes
echo "Adicionando repositório do MongoDB..."
echo "deb [signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Atualiza a lista de pacotes novamente
echo "Atualizando a lista de pacotes após adicionar o repositório..."
sudo apt update

# Instala o MongoDB
echo "Instalando o MongoDB..."
sudo apt install -y mongodb-org

# Inicia o serviço do MongoDB
echo "Iniciando o serviço do MongoDB..."
sudo systemctl start mongod

# Habilita o MongoDB para iniciar na inicialização do sistema
echo "Habilitando o MongoDB para iniciar no boot..."
sudo systemctl enable mongod

# Verifica o status do MongoDB
echo "Verificando o status do MongoDB..."
sudo systemctl status mongod

echo "Instalação do MongoDB concluída!"
