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

//Paso 5
/*
  En el paso anterior vimos como convetir las porciones de buffer a un texto mas comprensible,
  en este paso, veremos como combinar ambos metodos para poder ejecutar nuestra aplicacion de consola de manera exitosa.
*/
//Requerimos el objeto http de node.js
var http = require("http");

function getInfo(){
  //declaramos una variable que sera el titulo de la serie o pelicula que vamos a consultar
  var searchText = "Game of Thrones";

  // en este paso vamos a utilizar nuestra url oiginal, utilizando el parametro "t"
  http.get("http://www.omdbapi.com/?t=" + searchText, function(response){
    /* ---Continuamos en Paso 5---
      declaramos una variable que nos servira para ir concatenando cada chunk del buffer de informacion
      que se este enviando durante el evento "data".
    */
    var body = "";
    response.on('data', function (chunk){
        body += chunk;
        /*
          Eliminamos la expresion "BODY: ", para que podamos recibir un objeto completamente limpio
        */
    })

    response.on('end', function(){
      /*
        Llamaremos a nuestra funcion printInfo desde el evento "end", porque mostraremos la informacion
        hasta que el evento "data" haya finalizado.

        Algo que debes tener en cuenta es, lo que estamos almacenano en la variable "body", es un string,
        y el API nos esta devolviendo un JSON, por lo tanto debemos convertir o hacer un PARSE de string a JSON.
        para ello JavaScript nos proporciona un objeto JSON y un metodo llamado "parse", el cual convierte un string
        a un objeto tipo JSON
      */
      try{
        //Convertimo la variable body a un objeto
        var profile = JSON.parse(body);
        /*
          Por ultimo empleamos el metodo para imprimir la inforacion pasando los parametros correspondientes.
          para verificar el nombre que tiene cada propiedad, puedes hacer previamente un console.log(profile) y ver
          el nombre de cada propiedad de manrea correcta.
        */
        printInfo(profile.Title, profile.Rated, profile.Genre, profile.Awards, profile.imdbRating, profile.Plot);

      }catch(error){
        console.log(error);
      }
    })
  })
}

//Prueba de verificacion que debera ser ejecutada en la consola a traves del comando node [nombre_archivo.js]
getInfo();
