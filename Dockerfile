FROM node:lts-alpine3.15

ENV BASE=/srv/media-angular-practice/
RUN mkdir ${BASE}
WORKDIR ${BASE}

COPY src src
COPY angular.json .
COPY tsconfig* .
COPY package.json .

RUN npm i

CMD [ "npm", "run", "start" ]
EXPOSE 4200
