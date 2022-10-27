FROM node:18-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
COPY package.json ./
COPY package-lock.json ./
RUN yarn add typescript
RUN npm install react-scripts -g --silent
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]