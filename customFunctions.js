let customFunctions = {
	secciones : {
		"/" : "Home",
		"/en-cartelera" : "Cartelera",
		"/mas-votadas" : "Mas votadas",
		"/sucursales": "Sucursales",
		"/contacto": "Contacto",
		"/preguntas-frecuentes": "FAQ"
	},
	piePagina : function (actual)
	{
		let hipervinculos = `<br/><hr/>Recordá que podes visitar las siguientes secciones: `
		for(let pagina in this.secciones){
			if(pagina != actual){
				hipervinculos += `<a href=${pagina}>${this.secciones[pagina]}</a>, `
			}
		}
		hipervinculos += `<br/>` 
		return hipervinculos;
	},
	ordenar : function (vector)
	{
		let vector_ordenado = vector.sort(function (a,b){
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title){
				return 1;
			}
			return 0;
		});
		return vector_ordenado
	},
};
module.exports = customFunctions