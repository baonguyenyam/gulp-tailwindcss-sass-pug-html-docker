FROM node:20-alpine AS base 

WORKDIR /app

COPY package.json ./ 

RUN yarn install 

COPY . . 

# Build the app

RUN yarn build

# Start the app

ENV PORT=3000

EXPOSE 3000 

CMD ["node", "index.js"]