FROM node:alpine
RUN mkdir -p /code
WORKDIR /code
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm","run", "watch"]
