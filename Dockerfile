FROM node:16-alpine AS build
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf
