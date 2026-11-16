# Install Linux Alpine containing Node.js 24
FROM node:24-alpine

# Create project folder inside the image:
WORKDIR /app

# Copy dependency manifests:
COPY package*.json /app/

# Install dependencies inside the image (Linux binaries, not Windows):
RUN npm install

# Copy current app to /app inside the image:
COPY . /app

ENTRYPOINT [ "npm", "start" ]

# Create the image:
# docker build -t kittens-image .

# Create the container:
# docker create --name kittens-container -p 4001:4000 kittens-image

# Run container:
# docker start kittens-container

# Stop container:
# docker stop kittens-container

# Remove container:
# docker rm kittens-container