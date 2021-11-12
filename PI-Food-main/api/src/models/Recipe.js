
const { DataTypes } = require('sequelize');

const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,//genera numero random de letras y nums
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4()//es un datatype  de sequelize
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    summary: {
      type: DataTypes.TEXT,
      // allowNull: false
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    analyzedInstructions: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};