FROM node:12.18.2-alpine3.9

WORKDIR /usr/src/app

COPY . .

EXPOSE 8000

ENTRYPOINT ["npm", "run", "start"]