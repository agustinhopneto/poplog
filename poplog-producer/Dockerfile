FROM node:16-alpine

WORKDIR /home/app

COPY . ./

RUN yarn && yarn cache clean

EXPOSE 10000

CMD ["yarn", "start:dev"]