FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production --no-optional --loglevel warn\
 && npm cache clean --force

COPY ./ ./
CMD ["npm", "run", "start"]
