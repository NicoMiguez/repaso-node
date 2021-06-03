module.exports = function (sequelize, dataTypes) { //se exporta el modelo que estoy creando
    let alias = "Genero"; // El nombre que le deoy al modelo para hacer los cruces

    let cols = { // configuracion de las columnas de la db
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
    }
}

    let config = { // configuracion de las tablas, nombre de la tabla y timestamps
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config); // le asigno todo lo anterior a la variable Genero

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, { // Aca le digo que 1 Genero tiene muchas Peliculas usando el archivo Pelicula de la carpeta models
            as: "peliculas", // le pongo un nombre a la relacion. peliculas porque tiene muchas peliculas
            foreignKey: "genre_id"
        });
    }

    return Genero; // retorno la variable con todo lo creado anteriormente
}