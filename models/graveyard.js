module.exports = function (sequelize, DataTypes) {
    var Graveyard = sequelize.define("Graveyard", {
        plant: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Graveyard.associate = function (models) {
        Graveyard.hasMany(models.Plant, {
            onDelete: "cascade"
        })
        Graveyard.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return Graveyard

};