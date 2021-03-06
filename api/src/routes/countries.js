const express = require("express");
const { Country, Activity } = require("../db");
const app = express.Router();

//prueba
app.get("/p", async (req, res) => {
  const paises = await Country.findAll({
    include: Activity,
  });
  let ids = paises.map((p) => p.id);
  res.send(ids);
});

app.get("/", async (req, res) => {
  // GETS FILTERS
  const paises = await Country.findAll({
    include: Activity,
  });

  // /countries?contiente="..."
  // valore segun select (6 continentes)
  if (req.query.continent || req.query.name || req.query.activity) {
    let paisesFiltrados = [];

    //Busqueda por name
    //Si es minuscula...
    if (req.query.name) {
      let nameCorrect = req.query.name
        .split(" ")
        .map((p) => p.charAt(0).toLocaleUpperCase() + p.substr(1))
        .toString()
        .replace(",", " ");

      let paisesXName = await paises.filter((pais) =>
        pais.nombre.includes(nameCorrect)
      );
      paisesFiltrados.push(paisesXName);
    }

    //Busqueda por continente
    if (req.query.continent) {
      if (req.query.name) {
        paisesFiltrados[0].continente !== req.query.continent &&
          paisesFiltrados.shift();
      } else if (!req.query.activity) {
        if (req.query.continent.toLowerCase() === "all" || req.query.continent === "desac") {
          paisesFiltrados.push(paises);
        } else {
          let paisesContinente = paises.filter((pais) =>
            pais.continente.includes(req.query.continent)
          );
          paisesFiltrados.push(paisesContinente);
        }
      }
    }

    //Busqueda por actividades
    if (req.query.activity) {
      if (req.query.continent) {
        if (req.query.continent !== "all" || req.query.continent !== "desac") {
          var paisesContinenteOne = paises.filter((pais) =>
            pais.continente.includes(req.query.continent)
          );
        }
        console.log(paisesContinenteOne);
        let paisesActividades = paisesContinenteOne.length
          ? paisesContinenteOne.filter((pais) => {
              let busqueda = pais.activities.filter((act) =>
                act.nombre
                  .toLowerCase()
                  .includes(req.query.activity.toLowerCase())
              );
              return busqueda.length > 0;
            })
          : paises.filter((pais) => {
              let busqueda = pais.activities.filter((act) =>
                act.nombre
                  .toLowerCase()
                  .includes(req.query.activity.toLowerCase())
              );
              return busqueda.length > 0;
            });
        paisesFiltrados.push(paisesActividades);
      } else {
        let paisesActividades = paises.filter((pais) => {
          let busqueda = pais.activities.filter((act) =>
            act.nombre.toLowerCase().includes(req.query.activity.toLowerCase())
          );
          return busqueda.length > 0;
        });
        paisesFiltrados.push(paisesActividades);
      }
    }

    let paisesFiltradosSR = paisesFiltrados.filter((pais, indice) => {
      return paisesFiltrados.indexOf(pais) === indice;
    });

    if (paisesFiltradosSR.length > 0) res.send(paisesFiltradosSR[0]);
    else {
      res.status(404).send({ message: "No hay resultados" });
    }
  } else {
    res.send(paises);
  }
});

app.get("/:idPais", async (req, res) => {
  const paises = await Country.findAll({
    include: Activity,
  });
  let id = req.params.idPais.toUpperCase();

  let pais = await paises.filter((p) => p.id === id);

  res.send(pais);

  //parte de actividades
});

module.exports = app;
