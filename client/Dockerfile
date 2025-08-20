# --------------------- BUILD STAGE ---------------------
FROM node:18-alpine AS build
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --------------------- PROD STAGE ---------------------
FROM nginx:stable-alpine AS production
COPY --from=build /client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
