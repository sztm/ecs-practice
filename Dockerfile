FROM node:16-bullseye-slim

WORKDIR /usr/src/app

RUN ls
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]