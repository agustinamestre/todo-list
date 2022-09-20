# syntax=docker/dockerfile:1

FROM node:18-alpine3.15

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm", "start" ]