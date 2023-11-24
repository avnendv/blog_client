FROM node:20.9-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install

COPY . .

ARG CLIENT_BASE_URL
ARG CLIENT_BASE_API
ENV VITE_BASE_URL=$CLIENT_BASE_URL
ENV VITE_BASE_API=$CLIENT_BASE_API

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]