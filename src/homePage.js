let movies = require("../data/movies.json");
let customFunctions = require("../customFunctions");

let titulo = `Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, 
                incluso mucho mejor que Netflix, Cuevana y PopCorn.<br/> <hr/>`;

let movies_ordenadas = customFunctions.ordenar(movies.movies)

let listado = "<br/>Listado: <br/><br/>";
for (const i in movies_ordenadas) {
    listado += `<li/>${movies_ordenadas[i].title}</li>`
}
totalDePeliculas=`Total de peliculas en cartelera: ${movies.total_movies} <br/>`

let homePage = titulo + totalDePeliculas + listado + customFunctions.piePagina('/')

module.exports = homePage;



