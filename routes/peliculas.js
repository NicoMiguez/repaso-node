var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController");

// Creación de peliculas

router.get("/crear", peliculasController.crear); // Creo la ruta donde se va a ver la opción de crear peliculas

module.exports = router;