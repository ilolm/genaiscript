FROM node:20-alpine

WORKDIR /app
COPY . /app

RUN apk add --no-cache python3 py3-pip && \
    yarn install && yarn compile

EXPOSE 8003

CMD ["node", "packages/cli/built/genaiscript.cjs", "serve"]
