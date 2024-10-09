#!/bin/bash

# Filtra os IDs dos containers e armazena em um array
container_ids=($(docker ps -a | awk 'NR>1 {print $1}'))

# Loop pelos IDs e imprime os logs de cada container
for container_id in "${container_ids[@]}"; do
  echo "Logs do container ID: $container_id"
  docker logs "$container_id"
  echo "----------------------------------------"
done