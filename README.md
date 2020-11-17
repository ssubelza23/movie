# movie
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

