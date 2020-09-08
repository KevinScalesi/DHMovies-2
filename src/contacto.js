let customFunctions = require("../customFunctions.js")

let titulo = `Contáctanos <br/> <hr/>`
let contenido = `​¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
clientes.<br/>Si deseas contactarnos podés escribirnos al siguiente email:
dhmovies@digitalhouse.com o en las redes sociales.<br/> Envianos tu consulta,
sugerencia o reclamo y será respondido a la brevedad posible.<br/> Recordá que
también podes consultar la sección de Preguntas Frecuentes para obtener
respuestas inmediatas a los problemas más comunes`
let contacto = titulo + contenido + customFunctions.piePagina("/contacto");

module.exports = contacto