const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish: {
      type: DataTypes.STRING,

    },
    summary: {
      type: DataTypes.STRING,
    },
    spoonacularScore: {
      type: DataTypes.FLOAT,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    analyzedInstructions: {
      type: DataTypes.JSON
    },
    createdInOb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
