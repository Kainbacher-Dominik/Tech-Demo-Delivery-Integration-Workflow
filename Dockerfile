FROM node:14

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p uploads

EXPOSE 3000

RUN npm test

CMD ["node","src/app/server.js"]

