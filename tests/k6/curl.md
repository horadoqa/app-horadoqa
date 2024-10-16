# CURL

## POST

```bash
curl -X POST http://localhost:5000/api/cadastro -H "Content-Type: application/json" -d '{"name": "Elisa Coelho", "email": "elisa.coelho@email.com", "telefone": "(21) 95678-9012"}'
```

## DELETE

```bash
curl -X DELETE http://localhost:5000/api/usuarios/2
```bash