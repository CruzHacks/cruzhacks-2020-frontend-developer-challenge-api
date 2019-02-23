FROM node:11-alpine

WORKDIR /api

COPY . .

EXPOSE 80 433 8080

RUN npm i

CMD [ "npm", "start" ]