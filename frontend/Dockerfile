# =================
# 운영환경 Dockerfile
# =================

# ==== Builder Stage ====
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./ 
CMD npm run build

FROM nginx
# 포트매핑
EXPOSE 3000
# 작성한 nginx설정파일(default.conf)을 nginx컨테이너 내에 복사 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf 
# 위 builder stage에서 build된 파일을 nginx의 root경로에 복사
COPY --from=builder /app/build /usr/share/nginx/html


# FROM node:alpine as builder
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx
# EXPOSE 3000 
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build  /usr/share/nginx/html