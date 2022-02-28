FROM shoot88/rtk-frontend-template-dockerfile:0.1 AS build
WORKDIR /app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:1.19-alpine
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf
