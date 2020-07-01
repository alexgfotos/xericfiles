module.exports = function (sequelize, DataTypes) {
    var Species = sequelize.define("Species", {
        species: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        subSpecies: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        locality: {
            type: DataTypes.TEXT,
            allowNull: true,
            len: [1]
        }
    });

    Species.associate = function (models) {
        // Associating Species with Posts
        // When an Species is deleted, also delete any associated Posts
        Species.hasMany(models.Image, {
        })
        Species.hasMany(models.Plant, {
        })
        Species.belongsTo(models.Genus
        );
    };

    return Species;
};
