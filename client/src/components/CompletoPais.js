import React from "react";

let pais = [
  {
    id: "MYS",
    nombre: "Malaysia",
    imagen_de_la_bandera: "https://flagcdn.com/my.svg",
    continente: "Asia",
    capital: '{"Kuala Lumpur"}',
    subregion: "South-Eastern Asia",
    area: 330803,
    poblacion: 32365998,
  }
]

function CompletoPais () {
  return (
    <div>
       <div>
          <h2>{pais[0].nombre}</h2>

          <h4>Continente:</h4>
          <p>{pais[0].continente}</p>

          <h4>Bandera:</h4>
          <img 
          style={{width: "5em"}}
          src={pais[0].imagen_de_la_bandera} 
          alt={`Bandera de ${pais[0].nombre}`} />
        </div>
      <div>
        <h3>Detalles</h3>
        <ul>
          <li>Codigo Pais: {pais[0].id}</li>
          <li>Capital: {pais[0].capital}</li>
          <li>Subregión: {pais[0].subregion}</li>
          <li>Área: {pais[0].area} km2</li>

          {/* Crear forma para agregar . */}
          <li>Población: {pais[0].poblacion}</li>
        </ul>


        <h3>Actividades</h3>
        <ul>Lista Actividades</ul>
        {/* Componente Lista Actividades */}
      </div>
    </div>
  );
}

export default CompletoPais;
