FROM node

WORKDIR /myfolder/
# 

COPY ./package.json /myfolder/
COPY ./package-lock.json /myfolder/



RUN npm install
RUN npm install -g ts-node typescript

COPY . /myfolder/
#
# CMD ts-node boardsSwagger.tss
CMD [ "ts-node", "boardsSwagger.ts" ]
