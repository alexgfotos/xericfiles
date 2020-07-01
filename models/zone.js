module.exports = function(sequelize, DataTypes) {
    var Zone = sequelize.define("Zone", {
      zone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Zone.associate = function(models) {
      // We're saying that a Zone should belong to an User
      // A Zone can't be created without an User due to the foreign key constraint
      Zone.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Zone.belongsTo(models.Genus, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Zone;
  };
  