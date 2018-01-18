FROM node:carbon

# Create app directory
WORKDIR /Users/jamesshields/Eden_Care/Apps/ec_express_01

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 4001

CMD [ "npm", "start" ]