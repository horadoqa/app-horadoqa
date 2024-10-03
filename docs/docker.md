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

## Acessar

http://localhost

## Parar o container

```bash
docker stop <CONTAINER ID>
```

## Remover o container

```bash
docker rm <CONTAINER ID>
```