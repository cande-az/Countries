const express = require("express");
const { Activity } = require("../db");
const { Country } = require("../db");
const app = express.Router();

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
  let { nombre, dificultad, duracion, temporada, countries } = req.body;

  const newActivity = await Activity.create({
    nombre,
    dificultad,
    duracion,
    temporada,
  });

  try {
    /* if(countries.length === 1){
      await newActivity.addCountry(countries[0])
    } else { */
    await newActivity.addCountries(countries);
    //}
    res.json("agregar");
  } catch (error) {
    res.send(error);
  }
});

//prueba
app.post("/test", async (req, res) => {
  let actividadesCol = [
    {
      nombre: "Prueba 1Colombia",
      dificultad: 4,
      temporada: "Verano",
      countries: ["COL", "HTI"],
    },
    {
      nombre: "Prueba 2Colombia",
      dificultad: 3,
      temporada: "Verano",
      countries: ["COL", "HTI"],
    },
    {
      nombre: "Prueba 3Colombia",
      dificultad: 2,
      temporada: "Verano",
      countries: ["COL", "HTI"],
    },
    {
      nombre: "Prueba 4Colombia",
      dificultad: 2,
      temporada: "Verano",
      countries: ["COL"],
    }
  ];

  actividadesCol.forEach(async (act) => {
    let actividad = await Activity.create({
      nombre: act.nombre,
      dificultad: act.dificultad,
      temporada: act.temporada,
    });
    await actividad.addCountries(act.countries);
  });

  res.send("ok");
});

module.exports = app;
