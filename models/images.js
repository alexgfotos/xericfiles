module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Image.associate = function (models) {
        // Associating Image with Posts
        // When an Genus is deleted, also delete any associated Posts
        Image.belongsTo(models.Genus, {
            onDelete: "cascade"
        })
        Image.belongsTo(models.Species, {
            onDelete: "cascade"
        })
        Image.belongsTo(models.Plant, {
            onDelete: "cascade"
        })

    };



    return Image;
};
