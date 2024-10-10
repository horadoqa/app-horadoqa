#!/bin/bash

# Parar todos os containers
echo "Parando todos os containers..."
docker stop $(docker ps -q)
echo "------------------------------"

# Remover todos os containers
echo "Removendo todos os containers..."
docker rm $(docker ps -a -q)
echo "--------------------------------"

# Remover todas as imagens
echo "Removendo todas as imagens... "
docker rmi $(docker images -q)
echo "------------------------------"
echo "Limpeza concluída!"
echo "------------------------------"

# Remover Todos os Recursos (Containers, Imagens, Volumes)
# echo "Removendo Containers, Imagens e Volumes"
# docker system prune


# docker stop $(docker ps -q)
# docker rm $(docker ps -a | awk 'NR>1 {print $1}')
# docker rmi $(docker images | awk 'NR>1 {print $3}')