# Stage 1: Build the React app
FROM node:23-slim AS nodework

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.27.5-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /app/dist .  

# Optional: copy custom nginx config if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
