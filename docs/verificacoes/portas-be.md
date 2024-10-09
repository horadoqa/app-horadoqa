# Verificações

## Verificar as portas que o BE está escutando

Acessar o Container do BE

```bash
docker exec -it app-horadoqa-backend-1 /bin/sh
```

Instalar o netstat

```bash
apt-get update && apt-get install -y net-tools
```

Verificando 

```bash
netstat -tuln
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 127.0.0.11:43255        0.0.0.0:*               LISTEN     
tcp6       0      0 :::5000                 :::*                    LISTEN     
udp        0      0 127.0.0.11:56328        0.0.0.0:* 
```

Conclusão: A saída do netstat mostra que o backend está escutando na porta 5000, mas ele só está escutando no endereço :: (IPv6), que pode ser o motivo pelo qual você não consegue acessar através do localhost.

Alterado no servre-com-redis.js

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
});

```bash
netstat -tuln
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 0.0.0.0:5000            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.11:39197        0.0.0.0:*               LISTEN     
udp        0      0 127.0.0.11:41464        0.0.0.0:* 
```
