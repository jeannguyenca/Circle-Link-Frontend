FROM node:slim

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 3000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN yarn install --production

# Build app and start server from script
CMD ["/usr/src/app/run"]

# FROM node:8.10.0-alpine
# RUN mkdir -p /code
# WORKDIR /code
# ADD . /code
# RUN npm install -g -s --no-progress yarn && \
#   yarn && \
#   yarn run build && \
#   yarn cache clean && \
# CMD [ "yarn", "start" ]
# EXPOSE 3000