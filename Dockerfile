FROM nginx:latest

## Copy our default nginx config
#COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder ./www /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
