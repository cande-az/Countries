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
    },
    imagen_identificatoria: {
      type: DataTypes.STRING,
      defaultValue: "https://www.pinionegypt.com/thumb/resize,1800x1800,no_img.jpg",
    }
  },{
    timestamps: false
  });
};
