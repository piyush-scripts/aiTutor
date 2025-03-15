FROM node:20

WORKDIR /backend

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node","dist/index.js"]
