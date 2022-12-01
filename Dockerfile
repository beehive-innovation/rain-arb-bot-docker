FROM node:16-alpine

# Create app directory
WORKDIR /usr/rain-arb-bot

# Copy only package.json and lock file to take advantage of cached docker layers
COPY package*.json ./

# Install git which is necessary for yarn
RUN apk add git

# Install deps
RUN yarn install --production --network-concurrency=1

# Bundle app source
COPY . .

# Expose the port
EXPOSE 5555

# Entrypoint of the app
ENTRYPOINT [ "./run.js" ]