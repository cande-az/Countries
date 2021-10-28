import React from "react";
import ListaPaises from "./ListaPaises";
import ListaPsFiltrada from "./ListaPsFiltrada";

function ListaMadrePaises({ nombreCon, filter, ordenado }) {
  return (
    <div>
      {filter ? (
        <ListaPsFiltrada ordenado={ordenado} nombreCon={nombreCon} />
      ) : (
        <ListaPaises ordenado={ordenado} />
      )}
    </div>
  );
}

export default ListaMadrePaises;
