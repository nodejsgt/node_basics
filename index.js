/*
Problema: Crear una aplicación de consola que nos permita consultar la base de datos de omdbapi.com

Solución: Se crearán un par de métodos que sirvan para mostrar la información obtenida y otra función
          que nos permitirá consultar la información por medio del método http que provee node.js
*/
//Paso 6
/*
  En este ultimo paso, veremos como podemos exportar nuestros metodos a traves de otros archivos de JS
  para ello, creamos un nuevo archivo llamado profile.js (de preferencia en el mismo folder donde tenemos nuestro archivo),
  el cual contrendra toda la logica de las dos funciones: "printInfo" y "getInfo".
*/

var profile = require("./profile");
var searchText = "Game of Thrones";
profile.getInfoByTitle  (searchText);

//Explicacion
/*
  Con la instruccion require, indicamos que requerimos el archifo profile.js, es una especie de importacion
  o agregar dependencias. Con ello ya tenemos acceso a todos las funciones que han sido exportadas o expuestas
  para poder utilizarlas.

  la variable "searchText", la empleamos para contener siempre el texto a buscar, el cual sera enviado como parametro
  a nuestra funcion getInfo.

  Por ultimo, accedemos a la funcion que ha sido expuesta por medio de la variable profile + . + [el nombre de la funcion]
  para ello dentro de nuestro archivo profile.js, utlizamos el metodo module.exports y pasamos como parametro la variable "searchText"
*/
