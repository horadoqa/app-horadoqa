#!/bin/bash

# Atualiza a lista de pacotes
echo "Atualizando a lista de pacotes..."
sudo apt update

# Instala dependências
echo "Instalando dependências..."
sudo apt install -y curl

# Adiciona o repositório do NodeSource para a versão mais recente do Node.js
echo "Adicionando repositório do NodeSource..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Instala o Node.js
echo "Instalando o Node.js..."
sudo apt install -y nodejs

# Verifica a instalação
echo "Verificando a instalação do Node.js e npm..."
node -v
npm -v

echo "Instalação do Node.js concluída!"
