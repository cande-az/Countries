const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    nombre: {
      type: DataTypes.STRING
    },
    dificultad:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:5
      }
    },
    duracion:{
      type: DataTypes.STRING
    },
    temporada:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
    }
  },{
    timestamps: false
  });
};
