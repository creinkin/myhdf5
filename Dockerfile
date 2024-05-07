FROM node:20-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start", "--", "--port", "8080", "--no-open", "--host"]