module.exports = function (sequelize, DataTypes) {
    const Wishlist = sequelize.define("Wishlist", {
        // plant: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    });
    Wishlist.associate = function (models) {
        Wishlist.hasMany(models.Plant, {
            onDelete: "cascade"
        })
        Wishlist.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return Wishlist

};