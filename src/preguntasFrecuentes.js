let faqs = require("../data/faqs.json")
let customFunctions = require("../customFunctions.js")

let titulo = `Preguntas Frecuentes <br/> <hr/>`
let totalDePreguntas = `Total de preguntas realizadas: ${faqs.total_faqs}<br/>`
let listado = `<br/> Listado de preguntas frecuentes: <br/><br/>`
faqs.faqs.forEach(element =>{
    listado += `<li/> ${element.faq_title} <br/><br/>&nbsp&nbsp&nbsp&nbsp ${element.faq_answer}<br/><br/> </li>`
});

let preguntasFrecuentes = titulo + totalDePreguntas + listado + customFunctions.piePagina("/preguntas-frecuentes");

module.exports = preguntasFrecuentes