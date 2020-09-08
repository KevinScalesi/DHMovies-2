let theaters = require("../data/theatres.json");
let customFunctions = require("../customFunctions");

let titulo = "Nuestras Salas <br/><hr/>"
let totalDeSucursales = `Total de sucursales: ${theaters.total_theaters} <br/>`
let listado = `<br/>Surcursales: <br/><br/>`
theaters.theaters.forEach(element =>{
	listado += `<li/>Sucursal: ${element.name} (Dirección: ${element.address}).</li><br/>&nbsp&nbsp&nbsp&nbsp&nbsp Descripción: ${element.description} <br/><br/>`
});

let sucursales = titulo + totalDeSucursales + listado + customFunctions.piePagina("/sucursales");

module.exports = sucursales