let movies = require("../data/movies.json");
let customFunctions = require("../customFunctions");

let movies_ordenadas = customFunctions.ordenar(movies.movies)

let titulo = `En cartelera <br/><hr/>`
let listado = "<br/>Listado: <br/><br/>";
for (const i in movies_ordenadas) {
		listado += `<li/>${movies_ordenadas[i].title}:</li> <br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${movies_ordenadas[i].overview}<br/><br/>`
}
let totalDePeliculas=`Total de peliculas en cartelera: ${movies.total_movies} <br/>`

let enCartelera = titulo + totalDePeliculas + listado + customFunctions.piePagina('/en-cartelera')

module.exports = enCartelera