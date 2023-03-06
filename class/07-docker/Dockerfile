# FROM ubuntu

# RUN apt install nodejs

# RUN mkdir aaa

# COPY ./index.js aaa/

# RUN cd ./aaa

# RUN node index.js
#s

FROM node

COPY ./index.js /myfolder/

WORKDIR /myfolder/

CMD node index.js