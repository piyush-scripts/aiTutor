FROM node:20

WORKDIR /

COPY . .

WORKDIR /backend

RUN npm install
RUN npm run dev

EXPOSE 3000

CMD ["node","index.js"]
