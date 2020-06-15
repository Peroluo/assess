# ui-common-services
# VERSION 1.0.0
# Author: zhuyuanhao
FROM node:8.0-alpine
MAINTAINER zhuyuanhao zhuyuanhao@ipin.com

# Setting time zone
RUN echo "https://mirrors.ustc.edu.cn/alpine/v3.6/main" > /etc/apk/repositories && \
  echo "https://mirrors.ustc.edu.cn/alpine/v3.6/community" >> /etc/apk/repositories && \
  apk update && apk add ca-certificates && \
  apk add tzdata && \
  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  echo "Asia/Shanghai" > /etc/timezone

ENV WORK_DIR /usr/src/app

RUN mkdir -p $WORK_DIR

WORKDIR $WORK_DIR
COPY . $WORK_DIR

EXPOSE 5202

CMD ["node", "server.js"]
