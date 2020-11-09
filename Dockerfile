FROM nginx:latest

COPY . /usr/share/nginx/html
COPY ./nginx/conf.d /etc/nginx/conf.d
