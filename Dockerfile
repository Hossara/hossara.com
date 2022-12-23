FROM node:16

RUN mkdir -p /usr/src/hossara.com
WORKDIR /usr/src/hossara.com

COPY ./ /usr/src/hossara.com
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["node",".output/server/index.mjs"]