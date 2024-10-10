# Usar a imagem oficial do Node.js
FROM node:18

# Instalar redis-tools
RUN apt-get update && apt-get install -y redis-tools

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Expor a porta que o app vai rodar
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
