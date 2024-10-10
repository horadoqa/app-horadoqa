#!/bin/bash

container_id="7788b8dddfaa"  # Substitua pelo seu container ID

while true; do
  echo "Logs do container ID: $container_id"
  docker logs "$container_id"
  echo "----------------------------------------"
  sleep 5  # Espera 5 segundos
done