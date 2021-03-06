'use strict';
module.exports = (sequelize, DataTypes) => {
  var Memory = sequelize.define('Memory', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: DataTypes.TEXT,
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Memory.associate = function(models) {
    Memory.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'userId'
    });
    Memory.belongsTo(models.Landmark, {
      onDelete: 'CASCADE',
      foreignKey: 'landmarkId'
    });
    Memory.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: 'memoryId',
      onDelete: 'CASCADE'
    });
    Memory.belongsToMany(models.User, {
      as: 'Commenters',
      through: models.Comment,
      foreignKey: 'memoryId',
      onDelete: 'CASCADE'
    });
  };
  return Memory;
};
