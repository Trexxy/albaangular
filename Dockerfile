# Build the application in a node builder
FROM node:8 as builder

# Copy relevant project files
COPY package.json package-lock.json semantic.json ./
# Install dependencies and copy installed modules to /app folder
RUN npm install && mkdir /app && cp -R ./node_modules ./app
# Set working directory to /app
WORKDIR /app
# Copy root data to workdir
COPY . .
# Install semantic ui
RUN cd /app/src/assets/semantic && npm install gulp -g && gulp build
# Build production
RUN $(npm bin)/ng build --prod --aot=false && rm -rf ./node_modules


# Use nginx to serve the app
FROM nginx
# Copy nginx config file to config directory for nginx
COPY nginx-conf/nginx.conf /etc/nginx/nginx.conf
# Copy the production dist from the builder to nginx root
COPY --from=builder /app/dist /usr/share/nginx/html
