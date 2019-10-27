FROM node:12.13.0-alpine
MAINTAINER nongcundeshifu <2556434564@qq.com>
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8090
# ENTRYPOINT ['node']
# CMD tail -f /dev/null
# 不要使用 CMD ['app'] 这一句，这样其实没有跑 node app.js这个命令，这样，node容器一下就停止了
# 监听端口，其实就等于服务一直在运行
CMD node app.js

