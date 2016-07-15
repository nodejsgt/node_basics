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

//Paso 4
/*
  En el paso anterior vimos los eventos "data" y "end", de nuestro objeto "response",
  tambien vimos como es que se muestra la informacion cuado se esta ejecutando el evento "data",
  pues bien ahora veremos como mostrar esta informacion de manera mas atractiva y mucho mas
  comprensible para nuestra vista.
*/
//Requerimos el objeto http de node.js
var http = require("http");

function getInfo(){
  //declaramos una variable que sera el titulo de la serie o pelicula que vamos a consultar
  var searchText = "Game of Thrones";

  // en este paso vamos a cambiar un poco la url, en lugar del parametro "t", usaremos el parametro "s"
  http.get("http://www.omdbapi.com/?s=" + searchText, function(response){
    /* ---Continuamos en Paso 4---
      declaramos una variable que nos servira para ir concatenando cada chunk del buffer de informacion
      que se este enviando durante el evento "data".
    */
    var body = "";
    response.on('data', function (chunk){
        /*
          Esto de aca, nos ira concatenando el texto de una manera mas comprensiva para los usuarios, en este caso
          para nosotros.\
        */
        body += "BODY: " + chunk;
        console.log(body);
        /*
          Al momento de ejecutar el archivo en la consola te podras dar cuenta que ahora aparece de manera mas
          comprensible las porciones de informacion, cada vez que veas la expresion "BODY: ", esta es una especie de corte
          que realiza el stream, si no deseas ver el corte, simplemente elimina la expresion "BODY: ", y listo.
        */
    })

    response.on('end', function(){
      /*
        Para fines ilustrativos hemos utilizado este evento, el cual se ejecutara cuando la peticion haya finalizado (esto quiere decir
        cuano el evento "data" haya terminado), y se mostrara al final el texto que hemos definido.
      */
      console.log("termino la lectura de la peticion");
    })

  })
}

//Prueba de verificacion que debera ser ejecutada en la consola a traves del comando node [nombre_archivo.js]
getInfo();
