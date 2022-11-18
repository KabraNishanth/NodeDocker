 # Get the base image from here
FROM node:alpine
# Create a directory for holding the files in container image
RUN mkdir -p /usr/src/app
# Copy the code files in the container image
COPY . /usr/src/app
# Set working directory context
WORKDIR /usr/src/app
# Install the depedencies
RUN npm install
# Expose the port from container to outside world
EXPOSE 8000
# Starting point of container like main function
ENTRYPOINT ["node", "server.js"]