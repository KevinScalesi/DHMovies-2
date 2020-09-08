let homePage = require("./src/homePage.js")
let enCartelera = require("./src/enCartelera.js")
let masVotadas = require("./src/masVotadas.js")
let sucursales = require("./src/sucursales.js")
let contacto = require("./src/contacto.js")
let preguntasFrecuentes = require("./src/preguntasFrecuentes.js")

module.exports = {
    '/' : function(){
        return homePage
    },
    '/en-cartelera': function(){
        return enCartelera
    },
    '/mas-votadas': function(){
        return masVotadas
    },
    '/sucursales': function(){
        return sucursales
    },
    '/contacto': function(){
        return contacto
    },
    '/preguntas-frecuentes': function(){
        return preguntasFrecuentes
    },
    '/favicon.ico': function(){
        return ''
    },

};