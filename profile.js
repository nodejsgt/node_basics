var http = require("http");

function printInfo(title, rated, genre, awards, rating, plot){
  var message = "Title: " + title + "; Rated: " + rated + "; Genre: " + genre +
                "; Rating: " + rating + "/10; Awards: " + awards + "; Plot: " + plot;
  console.log(message);
}
function getInfo(searchText){
  http.get("http://www.omdbapi.com/?t=" + searchText, function(response){
    var body = "";
    response.on('data', function (chunk){
        body += chunk;
    })

    response.on('end', function(){
      try{
        //Convertimo la variable body a un objeto
        var profile = JSON.parse(body);
        printInfo(profile.Title, profile.Rated, profile.Genre, profile.Awards, profile.imdbRating, profile.Plot);

      }catch(error){
        console.log(error);
      }
    })
  })
}

// al final de cada archivo indcamos cuales seran los que vamos a exportar, en este caso solo exportaremos la funcion "getInfo"
// para ello utilizamos el formato: module.exports.[nombre que tendra la funcion a exportar] = [nombre funcion que estamos exportando]
module.exports.getInfoByTitle = getInfo;
