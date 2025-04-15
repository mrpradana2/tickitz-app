FROM node:20.19.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ei

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]