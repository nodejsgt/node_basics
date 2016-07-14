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

//Paso 2
/*
Crearemos el metodo que servira para consultar el api que proporciona amdbapi.com
Para ello sera necesario crear una variable que funcionara como texto a buscar y
debemos implementar el Objeto http nativo de Node.js
*/
//Requerimos el objeto http de node.js
var http = require("http");

function getInfo(){
  //declaramos una variable que sera el titulo de la serie o pelicula que vamos a consultar
  var searchText = "Game of Thrones";

  http.get("http://www.omdbapi.com/?t=" + searchText, function(response){
    console.log(response);
  })
}

//Prueba de verificacion que debera ser ejecutada en la consola a traves del comando node [nombre_archivo.js]
getInfo();
