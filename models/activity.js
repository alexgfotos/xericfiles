module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        care: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        light: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        water: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        fertilizer: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }

        },
        plantStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }

    });
    Activity.associate = function (models) {
        // Associating Activity with a Plant
        // When an Plant is deleted, also delete any associated Activity
        Activity.belongsTo(models.Plant, {
            onDelete: "cascade"
        })
    };



    return Activity;
};

