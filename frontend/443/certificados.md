# 443

Para usar o 443

precisa copiar o docker-compose para o frontend junto com o nginx.conf


Baixar os Certificados SSL:

Você precisará de um certificado SSL. Para desenvolvimento, você pode usar um certificado autoassinado, mas para produção, é recomendado usar um certificado de uma autoridade certificadora (CA).
Se você ainda não tem, pode gerar um certificado autoassinado usando OpenSSL:

openssl req -x509 -newkey rsa:2048 -keyout your-key.key -out your-cert.crt -days 365 -nodes


Atualize o nginx.conf:

Certifique-se de que o caminho para os certificados no seu arquivo nginx.conf esteja correto. Aqui está um exemplo de como deve ficar:

ssl_certificate /etc/ssl/certs/your-cert.crt;      # Caminho para seu certificado SSL
ssl_certificate_key /etc/ssl/private/your-key.key;  # Caminho para sua chave privada SSL

docker compose down
docker compose up -d