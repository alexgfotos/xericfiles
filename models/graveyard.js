module.exports = function (sequelize, DataTypes) {
    const Graveyard = sequelize.define("Graveyard", {
        date: {
            type: DataTypes.DATEONLY,
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