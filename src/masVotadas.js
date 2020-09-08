let movies = require("../data/movies.json");
let customFunctions = require("../customFunctions");


let movies_ordenadas = customFunctions.ordenar(movies.movies) 

let titulo = `Más votadas <br/><hr/>`

let totalMasVotadas = movies_ordenadas.filter(function(movie){
   return movie.vote_average > 7
})

let listado = "<br/>Listado: <br/><br/>";
totalMasVotadas.forEach(element => {
    listado += `<li/>${element.title} (Rating IMDb = ${element.vote_average}):</li> <br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${element.overview}<br/><br/>`
});

let total = 0;
let ratingAverage = totalMasVotadas.reduce(function(actual,siguiente){
    total++
    return actual + siguiente.vote_average
},0);
ratingAverage/=total;

totalDePeliculas = `Total de peliculas en cartelera: ${total}, con un ratin promedio de: ${ratingAverage.toFixed(2)} <br/>`
			
let masVotadas = titulo + totalDePeliculas +listado + customFunctions.piePagina('/mas-votadas')
module.exports = masVotadas;