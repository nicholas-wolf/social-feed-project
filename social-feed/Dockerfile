# *** The Build Environment ***
# Pull Official base image
FROM node:alpine as build

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@5.0.1 -g

# Add app
COPY ./ ./
# Build prod code
RUN npm run build

# *** The Production Environment ***
FROM nginx:alpine as prod
COPY --from=build /app/build /usr/share/nginx/html

# Allows for React router to be used with nginx
# COPY nginx/nginx.conf / etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]