/*
Problema: Crear una aplicación de consola que nos permita consultar la base de datos de omdbapi.com

Solución: Se crearán un par de métodos que sirvan para mostrar la información obtenida y otra función
          que nos permitirá consultar la información por medio del método http que provee node.js
*/

/*
Paso 1:
Crearemos una funcion que nos permita imprimir la informacion que proveera nuestra funcion recolectora.
*/
function printInfo(title, rated, genre, awards, rating, plot){
  var message = "Title: " + title + "; Rated: " + rated + "; Genre: " + genre +
                "; Rating: " + rating + "/10; Awards: " + awards + "; Plot: " + plot;

  console.log(message);

}

//Test de verificacion
printInfo("Game of Thrones", "TV-MA", "Adventure, Drama, Fantasy", "Won 1 Golden Globe", "9.5", "Good tv series");
