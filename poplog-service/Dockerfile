FROM node:16-alpine

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

EXPOSE 10002

CMD ["yarn", "start:dev"]