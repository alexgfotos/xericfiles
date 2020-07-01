module.exports = function (sequelize, DataTypes) {
    var Plant = sequelize.define("Plant", {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: true,
            len: [1]
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
            len: [1]
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
    });

    Plant.associate = function (models) {
        Plant.hasMany(models.Image, {
            onDelete: "cascade"
        })
        Plant.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Plant.belongsTo(models.Species, {
            foreignKey: {
                allowNull: false
            }
        });

    }

    return Plant

};