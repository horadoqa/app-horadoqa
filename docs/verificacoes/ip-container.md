# Teste a Conexão Usando o IP do Container

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' app-horadoqa-backend-1

172.18.0.5

curl http://172.18.0.5:5000/api/usuarios
```

