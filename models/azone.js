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
  
    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an User
    //   // A Post can't be created without an User due to the foreign key constraint
    //   Post.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Zone;
  };
  