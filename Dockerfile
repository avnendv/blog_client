FROM node:20.9-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]