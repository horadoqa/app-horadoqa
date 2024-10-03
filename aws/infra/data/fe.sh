#!/bin/bash

# Atualiza a lista de pacotes
echo "Atualizando a lista de pacotes..."
sudo apt update

# Instala o Nginx
echo "Instalando o Nginx..."
sudo apt install -y nginx

# Inicia o serviço do Nginx
echo "Iniciando o serviço do Nginx..."
sudo systemctl start nginx

# Habilita o Nginx para iniciar na inicialização do sistema
echo "Habilitando o Nginx para iniciar no boot..."
sudo systemctl enable nginx

# Exibe o status do Nginx
echo "Verificando o status do Nginx..."
sudo systemctl status nginx

echo "Instalação do Nginx concluída!"
