const express = require("express");
const { Country } = require("../db");

const app = express.Router();

//prueba
app.get("/p", (req, res) => {
  res.send("hola");
});

//GET /countries

app.get("/", async (req, res) => {

//GET /countries?name="..."
  if (req.query.name) {
      let name = req.query.name;

      //Si es minuscula...
      let nameCorrect = name
        .split(" ")
        .map((p) => p.charAt(0).toLocaleUpperCase() + p.substr(1))
        .toString()
        .replace(",", " ");

      let pais = await Country.findAll({
        where: {
          nombre: nameCorrect,
        },
      });
      if(pais.length > 0) res.send(pais);
      else res.status(404).send({ message: "No existe ese pais" });
  } else {
    //GET /countries
    let paises = await Country.findAll(/* {
      attributes: ["nombre"],
    } */);
    res.send(paises);
  }
});

app.get("/:idPais", async (req, res) => {
  let id = req.params.idPais.toUpperCase();
  let pais = await Country.findByPk(id);
  res.send(pais);

  //parte de actividades
});

module.exports = app;
