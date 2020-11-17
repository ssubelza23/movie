# movie
Desarrollo Web Full Stack Node
Ejercitación - M07C17
Mis películas - Bases de datos
y vistas
Introducción
Finalmente es hora de conectar nuestro proyecto de Express a nuestra base de datos.
De esta manera buscamos que la información que vemos en nuestro sitio web muestre
información real proveniente de una fuente de información veloz y escalable. Para esta
altura el objetivo será el de únicamente listar y mostrar la información pero será un paso
previo requerido el de establecer la conexión con la base de datos.
Requisitos
● Paquete Sequelize instalado: Para lograr el objetivo es fundamental lograr instalar
Sequelize y los paquetes relacionados necesarios.
● Conexión con base de datos: El paquete sequelize no solamente precisa ser instalado
sino que también precisa ser inicializado y configurado correctamente.
● Sitio Web mostrando información real: Hasta ahora no hemos obtenido información de
una base de datos formal. Ya sea información de un JSON o escrita a mano, es hora de
reemplazar dichos atajos con una versión consistente y real.2
Objetivo
Para la construcción de esta versión del sitio web, el cliente espera contar con la
posibilidad de acceso a las siguientes URL's:
● /movies (GET)
○ Se deberán listar todas las películas de la base de datos. Cada título de
película deberá ser un hipervínculo para ver el detalle de la misma.
● /movies/detail/:id (GET)
○ Detalle de la película. Se deberá mostrar la película correspondiente al id
que aparezca en la URL. Cada película deberá listar sus datos (Título,
rating, premios, duración y fecha de estreno) y contar con dos (2) botones
de acción: BORRAR y MODIFICAR.
● /movies/new (GET)
○ Deberá mostrar las últimas 5 películas ordenadas según su fecha de
estreno. Cada título de película deberá ser un hipervínculo para ver el
detalle de la misma.
● /movies/recommended (GET)
○ Deberá mostrar las películas cuyo rating sea mayor o igual a 8. Cada título
de película deberá ser un hipervínculo para ver el detalle de la misma.
● /movies/search (POST)
○ Deberá mostrar los resultados de búsqueda. Cada título de película
deberá ser un hipervínculo para ver el detalle de la misma. Idealmente el
usuario podría elegir el criterio de ordenamiento de los resultados
Consignas
1. Sobra la inicialización del proyecto
Si aún no contas con un proyecto armado recomendamos crear uno con
express-generator. ¡No olvides aclarar que usaremos ejs como template engine!3
Recomendamos que crees el archivo de rutas para películas (y lo configures
en app.js) así como el controlador de películas.
Si te es útil recomendamos crear los recursos necesarios para tener una plantilla
en las vistas (como encabezado y footer)
Utilizaremos la base de datos movies_db
2. Sobre la instalación y configuración de sequelize
No olvides instalar los paquetes sequelize y sequelize-cli (de manera global) así
como el paquete mysql2 que tendrá los drivers para conectarse a una base de
datos de tipo mysql.
Una vez con los paquetes instalados será fundamental la creación del archivo
.sequelizerc con la siguiente estructura:
const path = require('path')
module.exports = {
config: path.resolve('./database/config', 'config.js'),
'models-path': path.resolve('./database/models'),
'seeders-path': path.resolve('./database/seeders'),
'migrations-path': path.resolve('./database/migrations'),
}
Luego es fundamental correr el comando sequelize init
Finalmente no olvides modificar el archivo ./database/config/config.js
agregando module.exports al principio y configurando los datos de conexión a la
base de datos.4
3. Creación de los modelos
Algo fundamental al inicializar un proyecto es explicarle a sequelize las tablas
que tiene nuestra base de datos. Para esto te pedimos que crees modelos para
las tablas movies, actors y genres (Películas, Actores y Generos).
No olvides aclarar el nombre de la tabla, si usa timestamps y todas sus
columnas con su tipo. Recomendamos aclarar datos como columnas que
aceptan nulo así como clave primaria y autoincremental.}
4. Sobre las páginas
En todas las páginas no olvides de realizar el camino de creación de ruta, controlador y
vista. Es fundamental que el controlador importe la variable db de
./database/models/index.js ya que esta variable tendrá nuestra conexión a la base de
datos.
● /movies (GET)
○ El controlador deberá utilizar la conexión a base de datos y el modelo de
Pelicula ya creado. Con eso en mente el método findAll permitirá obtener
todas las películas de la base de datos.
● /movies/detail/:id (GET)
○ El controlador deberá utilizar la conexión a base de datos y el modelo de
Pelicula ya creado. Con eso en mente el método findByPk permitirá
obtener la película buscada. Recordá utilizar req.params para obtener el id
de la URL.
● /movies/new (GET)
○ El controlador deberá utilizar la conexión a base de datos y el modelo de
Pelicula ya creado. Con eso en mente el método findAll junto con el
parámetro de configuración order permitirá obtener todas las películas de
la base de datos.
● /movies/recommended (GET)
○ El controlador deberá utilizar la conexión a base de datos y el modelo de
Pelicula ya creado. Con eso en mente el método findAll permitirá obtener
todas las películas de la base de datos. En este caso necesitarás agregar5
el parámetro de configuración where y utilizar los operadores de
Sequelize para resolver el desafío
● /movies/search (POST)
○ En primer lugar deberás agregar en las vistas un formulario con un campo
de búsqueda que envíe a la ruta requerida por POST. Esa ruta utilizara
req.body para obtener los datos buscados. El controlador deberá utilizar
la conexión a base de datos y el modelo de Pelicula ya creado. Con eso en
mente el método findAll permitirá obtener todas las películas de la base
de datos. El parámetro de configuración where junto con los operadores
de sequelize permitirán filtrar los resultados buscados.
○ Al agregar un campo de orden en el formulario y el parámetro order como
dato de configuración permitirá ordenar los resultados de la búsqueda
5. Bonus Track
Si lograste realizar toda la práctica, una buena idea es replicar el proceso pero
con Actores.
¡Mucha suerte!
