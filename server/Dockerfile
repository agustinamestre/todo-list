FROM node:18-alpine3.15

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

# set database connection string
ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]