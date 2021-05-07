FROM node:10.19.0
WORKDIR /app
COPY . .
RUN yarn
COPY . .
ENTRYPOINT ["yarn" , "start"]
EXPOSE 3000
