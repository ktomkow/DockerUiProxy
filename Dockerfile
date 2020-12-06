FROM node:lts
WORKDIR /app
COPY . ./
RUN npm ci --silent
EXPOSE 4999
CMD ["node", "index.js"]
