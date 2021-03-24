# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:10

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Copy source files from host computer to the container
COPY . .

# Build the app
RUN npm install

# Specify port app runs on
EXPOSE 1337

# Run the app
CMD [ "npm", "start" ]