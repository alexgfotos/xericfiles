module.exports = function(sequelize, DataTypes) {
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
  
    Plant.associate = function(models) {
        // Associating Plant with Posts
        // When an Plant is deleted, also delete any associated Posts
        Plant.hasMany(models.Image, {
            onDelete: "cascade"
          }),
        Plant.belongsTo(models.User
          );
      };
  
    return Plant;
  };
  