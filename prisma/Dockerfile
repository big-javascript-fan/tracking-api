FROM node:16.13.1-alpine3.14

WORKDIR /app

RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/* && \
    openssl version -v && \
    npm install -g prisma --unsafe-perm

ADD ./ ./prisma/
