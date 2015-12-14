FROM node
MAINTAINER Javi

ADD ./hope /hope-api
ADD start.sh /hope-api

WORKDIR /hope-api

CMD  bash -C "start.sh" ; bash

EXPOSE 3000


