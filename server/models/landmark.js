'use strict';
module.exports = (sequelize, DataTypes) => {
  var Landmark = sequelize.define('Landmark', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Landmark.associate = function(models) {
    Landmark.belongsTo(models.City, {
      onDelete: 'CASCADE',
      foreignKey: 'cityId'
    });
    Landmark.hasMany(models.Memory, {
      as: "Memories",
      foreignKey: 'landmarkId'
    });
  };
  return Landmark;
};
