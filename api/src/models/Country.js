const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('country', {
    id: {
      type: DataTypes.CHAR(3),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'The capital is not found'
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: 'The subregion is not found'
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.FLOAT,
    },
  },
    { timestamps: false }); //CON ESTO ELIMINO los campos createdAt y updatedAt QUE VIENEN POR DEFAULT.
};