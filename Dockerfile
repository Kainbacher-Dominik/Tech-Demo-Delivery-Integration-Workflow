FROM node:14

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p uploads

EXPOSE 3000

CMD ["node","src/app/server.js"]

RUN npm test
