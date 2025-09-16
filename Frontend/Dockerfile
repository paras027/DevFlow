# FROM node:latest

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . /app


# EXPOSE 5173

# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
# Stage 1: Build React app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

