### STAGE 1: Build ###

# Rotulamos nossa etapa como 'builder'
FROM node:20 as builder

WORKDIR /front

COPY package*.json ./

# Definimos o limite de memória para o npm install
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Setup ###

FROM nginx:latest

## Copiamos nossa configuração padrão do nginx
#COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

## Removemos o site padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /front/www /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]