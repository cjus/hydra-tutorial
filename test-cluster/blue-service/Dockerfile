FROM node:12
LABEL maintainer="Carlos Justiniano cjus@ieee.org"
EXPOSE 5001
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN echo "package-lock=false" > .npmrc
RUN npm install --production
ENTRYPOINT ["node", "index.js"]
