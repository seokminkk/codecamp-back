FROM node

WORKDIR /myfolder/

COPY . /myfolder/

RUN npm install
RUN npm install -g ts-node typescript
# CMD ts-node boardsSwagger.ts
CMD [ "ts-node", "boardsSwagger.ts" ]
