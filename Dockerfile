FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . ./
EXPOSE 4999
CMD ["node", "index.js"]
