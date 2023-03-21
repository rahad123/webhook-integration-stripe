FROM node:14.17-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm install pm2 -g
COPY . .
EXPOSE 3000
CMD ["pm2-runtime",  "server.js","--exp-backoff-restart-delay=100", "--time"]
