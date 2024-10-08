# Etapa 1: Construir a aplicação
FROM node:18 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json
COPY package*.json ./ 

# Instale as dependências
RUN npm install

# Copie todos os arquivos da aplicação
COPY . .

# Construa a aplicação para produção
RUN npm run build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copie os arquivos de build do estágio anterior para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie a configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
