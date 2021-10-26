const express = require("express");
const { Activity } = require("../db");
const app = express.Router();

//prueba
app.get("/p", (req, res) => {
  res.send("hola");
});

//POST /activity
app.post("/", async (req, res) => {
  let { nombre, dificultad, duracion, temporada } = req.body;
  try {
    const newActivity = await Activity.create({
      nombre,
      dificultad,
      duracion,
      temporada,
    });
    res.json(newActivity);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
