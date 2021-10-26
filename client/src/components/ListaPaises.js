import React from "react";
import ReducidoPais from "./ReducidoPais";
import { connect } from "react-redux";
import { addPaises } from "../actions/index";
import axios from "axios"
/* const paises = [
  {
    id: "MYS",
    nombre: "Malaysia",
    imagen_de_la_bandera: "https://flagcdn.com/my.svg",
    continente: "Asia",
    capital: '{"Kuala Lumpur"}',
    subregion: "South-Eastern Asia",
    area: 330803,
    poblacion: 32365998,
  },
  {
    id: "HTI",
    nombre: "Haiti",
    imagen_de_la_bandera: "https://flagcdn.com/ht.svg",
    continente: "Americas",
    capital: "{Port-au-Prince}",
    subregion: "Caribbean",
    area: 27750,
    poblacion: 11402533,
  },
  {
    "id": "TJK",
    "nombre": "Tajikistan",
    "imagen_de_la_bandera": "https://flagcdn.com/tj.svg",
    "continente": "Asia",
    "capital": "{Dushanbe}",
    "subregion": "Central Asia",
    "area": 143100,
    "poblacion": 9537642
  },
];
 */

function ListaPaises() {
  const[paises,setPaises] = React.useState([]);


  const getPaises = async () => {
  try {
    const respuesta = await axios({
      method: "get",
      url: "http://localhost:3004/api/countries/"
    });
    setPaises(respuesta.data)
  } catch (e) {
    console.error(e)
  }
}

return (
  <div>
    {/* creacion de cada Pais_reducido*/}
     {getPaises(),
     paises.map((p) => (
        <ReducidoPais
          key={p.id}

          nombre={p.nombre}
          continente={p.continente}
          imgBandera={p.imagen_de_la_bandera}
        />
      ))}
  </div>
);
}


export default ListaPaises;
