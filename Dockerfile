#https://www.linkedin.com/pulse/bir-angular-projesini-nas%C4%B1l-dockerize-ederiz-og%C3%BCn-eki%CC%87z-qzezf/
#docker build -t dockerapp .

FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
#RUN echo $(ls -1 /app/dist)
COPY --from=build /app/dist/devops.frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx", "-g", "daemon off;" ]