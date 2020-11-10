FROM node:12.18.2-alpine3.9

WORKDIR /usr/src/app

COPY . .

ENTRYPOINT ["npm", "run", "start"]