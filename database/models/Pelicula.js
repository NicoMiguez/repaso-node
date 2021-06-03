module.exports = function (sequelize, dataTypes) { //se exporta el modelo que estoy creando
    let alias = "Pelicula";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: { // este modelo de pelicula tiene que se mas completo porque es aqui donde se va a realizar el CRUD
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Genero, { // una pelicula pertenece a un genero
            as: "genero",
            foreignKey: "genre_id"
        });
        // Aca agrego otra relacion que tiene la tabla de peliculas
        Pelicula.belongsToMany(models.Actor, { // La relacion es de muchas a muchas
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false

        });
    }

    return Pelicula;
}