# The base image.
FROM node:11-alpine

# Create and cd into this directory inside the container.
WORKDIR /api

# Copy the files from the project directory into /api inside the container.
COPY . .

# Expose the ports.
EXPOSE 80 433 8080

# Install dependencies
RUN npm install --only=production

# Start the API
CMD [ "npm", "start" ]