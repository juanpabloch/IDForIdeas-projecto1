'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostUsers.init({
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    option: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostUsers',
  });
  return PostUsers;
};
