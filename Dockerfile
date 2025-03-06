FROM node:20-alpine AS base 

WORKDIR /app

COPY package.json ./ 

RUN npm install 

COPY . . 

# Build the app

RUN npm run build

# Start the app

ENV PORT=3000

EXPOSE 3000 

CMD ["node", "index.js"]