import React from "react";
import ReducidoPais from "./ReducidoPais";
import { connect } from "react-redux";

function ListaPsFiltrada({ paises_filtrados }) {
  return (
    <div>
      {paises_filtrados[0].map((p) => (
        <ReducidoPais
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          continente={p.continente}
          imgBandera={p.imagen_de_la_bandera}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    paises_filtrados: state.paises_filtrados,
  };
};

export default connect(mapStateToProps)(ListaPsFiltrada);
