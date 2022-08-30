FROM node:16-alpine

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

EXPOSE 10001

CMD ["yarn", "start:dev"]