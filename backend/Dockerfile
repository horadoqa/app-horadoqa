# Usar a imagem oficial do Node.js
FROM node:18

# Definir o diretório de trabalho
# Usar a imagem oficial do Node.js
FROM node:18

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
