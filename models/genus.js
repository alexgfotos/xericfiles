module.exports = function (sequelize, DataTypes) {
    var Genus = sequelize.define("Genus", {
        genus: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        country: {
            type: DataTypes.TEXT,
            allowNull: true,
            len: [1]
        }
    });

    Genus.associate = function (models) {
        // Associating Genus with Posts
        // When an Genus is deleted, also delete any associated Posts
        Genus.hasMany(models.Species, {
            onDelete: "cascade"
        })
        Genus.hasMany(models.Image, {
            onDelete: "cascade"
        })
        Genus.hasOne(models.Zone
        );
    };



    return Genus;
};
