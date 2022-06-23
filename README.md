# vue-3-crud

![Diagrama](https://raw.githubusercontent.com/LuceroLuciano/client-launchx/master/img/diagrama.png)


## Ejecutar el proyecto en local
[Ejecutar el proyecto en local](https://github.com/LuceroLuciano/Prissma-API/blob/main/README.md) <br>

### API - Express (Servidor)

El siguiente diagrama muestra la creación de una API, desde la creación del cliente(Frontend) y el servidor(Backend). 
Para esta pratica se hizo uso del framework VUE del lado del cliente.

Del lado del servidor se instalarón las siguientes dependencias:
- `Express` Es un framework para crear servers.
- `Prisma` Es un kit de código abierto que reemplaza los ORM tradicionales y facilita el acceso a la Base de Datos con un generdor de consultas. <br>

- Inicializa el prisma de la siguiente forma: `npx prisma init`. 

- Después de correr el comando anterior, se debe crear el archivo `.env` y la carpeta `prisma`.

- Es importante crear la Base de Datos (SOLO LA BASE DE DATOS, SIN REGISTROS), en este caso se hizo uso del Sistema
  Gestor de Base de Datos PostgreSQL.

- Modifica el archivo `.env`, coloca tu usuario y contraseña. 

- En el archivo `prisma/schema.prisma` agregar un nuevo modelo Explorer.

- El `archivo prisma/seed.js`, aquí se crean datos para insertarlos de forma automatizada en la db:
  `seed.js`

- Posteriormente se crea un servidor básico `server.js` agregando el cliente de Prisma.

Dentro del archivo `server.js` se crea el API CRUD con los siguientes Endpoints:
- `GEt`
- `POST`
- `PUT`
- `DELETE`

- Correr el servidor **node server.js**

### API Cliente

### Se hace uso de la API-Server creada anteriormente.

- Instalar nuevas dependencias
`CORS` Control de Acceso de HTTP 

- La **App cliente** estará en la siguiente URL: `http://localhost:8081`. Agrega lo siguiente en el `server.js`:
- Correr el cliente **npm run serve**


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
