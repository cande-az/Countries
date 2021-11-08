const express = require("express");
const { Activity } = require("../db");
const { Country } = require("../db");
const app = express.Router();
const datos = require("./data-actividades.js")
const { createClient } = require('pexels');

//prueba
app.get("/", async (req, res) => {
  let actividades = await Activity.findAll({
    include: Country,
  });
  //un buscador de actividades, para una pagina solo de actividades
  if (req.query.activity) {
    let actividadesBUSQ = actividades.filter((act) =>
      act.nombre.toLowerCase().includes(req.query.activity.toLowerCase())
    );
    console.log(actividadesBUSQ);
    res.send(actividadesBUSQ);
  } else {
    res.send(actividades);
  }
});

//POST /activity
app.post("/", async (req, res) => {
  let { nombre, dificultad, duracion, temporada, countries,imagen_identificatoria } = req.body;


  const newActivity = await Activity.create({
    nombre,
    dificultad,
    duracion,
    temporada,
    imagen_identificatoria
  });

  try {
    await newActivity.addCountries(countries);
    
    res.json(newActivity);
  } catch (error) {
    res.send(error);
  }
});


//prueba
app.post("/test", async (req, res) => {
  try {
    datos.actividades.forEach(async (act) => {
      let actividad = await Activity.create({
        nombre: act.nombre,
        dificultad: act.dificultad,
        temporada: act.temporada,
        imagen_identificatoria:act.imagen_identificatoria
      });
      await actividad.addCountries(act.countries);
    });
  
    res.send("ok");
  } catch(e){
    console.log(e)
  }

});

module.exports = app;
