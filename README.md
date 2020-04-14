# UniandesQuestionator

UniandesQuestionator es una pagina web que tiene como finalidad que las personas realicen sus preguntas de las materias en donde tengan dudas/problemas y obtengan respuesta por otros miembros de la comunidad. Así, entre todos podemos ayudarnos.

![imagen](https://raw.githubusercontent.com/larruibo/uniandesQuestionator/master/screen.png)

------------------------------------------------------------------------------
# Correr la pagina Web Localmente
Para correr la aplicacion localmente se necesita tener instalados estos complementos.

### Node.js
Para instalar Nodejs puedes visitar su pagina web [Node js](https://nodejs.org/es/download/).

### Mongo db
Como se va a correr localmente se necesita descargar mongodb, para hacerlo puedes visitar su pagina web [Mongo DB](https://www.mongodb.com/download-center/community).

Despues de instalar mongo ecribir en una terminal:

```
mongod
```
Y ya se tiene corriendo localmente la base de datos.


### Variables de entorno
Se necesita crear un .env en la carpeta raiz del proyecto y se debe agregar direccion completa de la base de datos de la siguiente forma: MONGO_DB_ATLAS=direccion con colecciones :

--------------------------------------------------------------------------------------------------
## Start
Para inicializar el proyecto se debe poner a correr el back y el front, para esto en la consola del computador siga los siguientes pasos:
```
Correr front

cd front

###Instalar dependencias del front
yarn install

###Correr el front
yarn start

##Correr back

###Instalar dependencias del back
yarn install

##Correr el back
yarn start
```

--------------------------------------------------------

# Autores
Sebastian Martinez
Luis Ruiz

--------------------------------------------------------------
# Link
[Pagina](https://preguntandes.herokuapp.com/)

-----------------------------------------------------------
# Licencia
Para el proyecto se utilizo la sieguiente licencia [MIT Licence](https://raw.githubusercontent.com/larruibo/uniandesQuestionator/master/LICENSE)
