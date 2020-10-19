FROM node:10-alpine

# Creación de carpeta de proyecto dentro de contenedor
RUN mkdir /app
WORKDIR /app
# Copia de archivo package.json
COPY package.json ./
# Instalación de dependecias de proyecto
RUN npm install 
RUN npm install http-errors
RUN npm install -g nodemon
RUN npm install --save multer
# Puerto expuesto para comunicación fuera del contenedor
EXPOSE 3000
# comando de inicio a la aplicación
CMD [ "nodemon","start"]
