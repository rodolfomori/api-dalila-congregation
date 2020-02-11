FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . . 

EXPOSE 3333

ENTRYPOINT [ "./init.sh" ]
# FROM node:10-alpine

# WORKDIR /usr/app
# COPY package.json yarn.lock ./

# RUN yarn

# COPY . .

# EXPOSE 3001
# CMD ["yarn","dev"]

# FROM node:lts-alpine

# RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

# WORKDIR /home/node/api

# COPY package.json yarn.* ./

# USER node

# RUN yarn

# COPY --chown=node:node . .

# EXPOSE 3001

# CMD ["yarn", "dev"]
