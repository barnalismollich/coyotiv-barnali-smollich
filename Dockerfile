FROM node:14.8.0-alpine3.11

RUN npm install -g nodemon

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin

CMD [ "nodemon"]
