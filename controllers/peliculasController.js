let db = require('../database/models');

let peliculasController = {
    crear: function(req, res) { // Quiero que para crear una peli el usuario ponga el genero de los generos que yo ofrezco desde la db
        db.Genero.findAll() // uso el nombre Genero que le puse en el alias del modelo Genero.js
            .then(function(generos){
                return res.render('listadoPeliculas', {generos:generos}); //retorno una vista que me muestre el listado de peliculas y le digo que tome los generos de la db que estoy pidiendo que consulte
            })
    }
}

module.exports = peliculasController;