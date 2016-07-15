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

//paso 3
/*
En el paso anterior hemos creado la estructura de nuestro metodo que consultara la informacion
en este paso daremos un par de toques a nuestro metodo.
*/
//Requerimos el objeto http de node.js
var http = require("http");

function getInfo(){
  //declaramos una variable que sera el titulo de la serie o pelicula que vamos a consultar
  var searchText = "Game of Thrones";

  http.get("http://www.omdbapi.com/?t=" + searchText, function(response){
    /* ---Continuamos en Paso 3---
      al momento de ejecutar nuestro archivo en la consola nos mostrara el response que obtiene
      luego de hacer la peticion a la URL enviada, te puedes tomar el tiempo en leer todo lo correspondiete
      al ojeto response.

      en este paso veremos que nuestro objeto "response", cuenta con eventos a los cuales podemos acceder
      para poder ver el flujo de datos. en este caso veremos los eventos "data" y los eventos "end".

      El evento data se utiliza mientras nuestra peticion continua ejecutandose, mientras que el evento "end",
      se ejecuta cuando termina de leer toda la informacion que proviene de nuestra consulta.
    */
    response.on('data', function (chunk){
      //Explicacion
      /*
        Al igual que en jQuery, response trabaja con eventos y callbacks (denominada funciones anonimas tambie)
        que se ejecutan despues de haberse ejecutado el evento, en este caso el parametro enviado se llama "chunk",
        que representa las porciones de stream que esta obteniendo de la peticion. Este evento se estara ejecutando
        mientras la peticion continue.

        Al ejecutar el archivo en tu consola veras algo similar a esto:
        "<Buffer 7b 22 54 69 74 6c 65 22 3a 22 47 61 6d 65 20 6f 66 20 54 68 72 6f 6e 65 73 22 2c 22 59 65 61 72 22 3a 22 32 30 31 31 e2 80 93 22 2c 22 52 61 74 65 64 ... >"
        es algo normal ya que, lo que estas mostrando es el Buffer del stream que esta pasando en ese momento.
      */
      console.log(chunk);
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
