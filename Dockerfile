### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:20 as builder

# WORKDIR ./front

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

### STAGE 2: Setup ###

FROM nginx:latest

## Copy our default nginx config
#COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder ./www /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
