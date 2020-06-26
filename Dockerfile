FROM node:13
RUN mkdir -p /usr/src/app
COPY service/ /usr/src/app
EXPOSE 3002
CMD [ "node", "/usr/src/app/server" ]
