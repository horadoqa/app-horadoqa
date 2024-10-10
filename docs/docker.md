# Docker

## Construir a Imagem Docker

```bash
docker build -t horadoqa/horadoqa-react:v1.0.0 .
```

## Enviando para o Dockerhub

```bash
docker push horadoqa/horadoqa-react:v1.0.0
```

## Executar o container

```bash
docker run -p 80:80 horadoqa-react:v1.0.0
```

## Docker compose

```bash
docker compse up -d
```

## Reconstruindo uma imagem

```
docker compose up --build    
```

## Acessar

http://localhost

## Parar o container

```bash
docker stop <CONTAINER ID>

docker stop $(docker ps -q)


```

## Remover o container

```bash
docker rm <CONTAINER ID>

docker rm $(docker ps -a | awk 'NR>1 {print $1}')

docker container prune
```

## Remover imagens

```bash
docker rmi <IMAGE ID> -f

docker rmi $(docker images | awk 'NR>1 {print $3}')

docker rmi $(docker images | tail -n +2 | cut -f 3 -d ' ')
```

## Remover Todos os Recursos (Containers, Imagens, Volumes)

```bash
docker system prune
```

## Remover volumes não utilizados

```bash
docker system prune --volumes
```

docker run -it --rm --network container:86af037d0c10 postgres:13 psql -h db -U horadoqa -d horadoqa

