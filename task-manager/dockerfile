FROM node:18

WORKDIR /app 

COPY . .

COPY /backend/package.json /app/backend/package.json
RUN npm install --only=production --prefix backend

COPY /frontend/package.json /app/frontend/package.json
RUN npm install --prefix frontend

COPY backend backend/
COPY frontend frontend/

RUN npm run build --prefix frontend

EXPOSE 3000
 
CMD ["npm", "start", "--prefix", "backend"]