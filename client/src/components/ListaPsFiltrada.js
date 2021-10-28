import React from "react";
import ReducidoPais from "./ReducidoPais";
import { fetchFilterContinente } from "../actions/index";
import { connect } from "react-redux";

function ListaPsFiltrada({ paises_filtrados,nombreCon,ordenado,fetchFilterContinente }) {
  const [carga,setCarga] = React.useState(false)

  React.useEffect(() => {
    fetchFilterContinente(nombreCon)
    console.log(nombreCon)
    //esperar a que se carge y recien hacer el map
    setCarga(true)
  }, [nombreCon,fetchFilterContinente]);

  return (
    <div>
      {carga && ordenado ? paises_filtrados.map((p) => (
        <ReducidoPais
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          continente={p.continente}
          imgBandera={p.imagen_de_la_bandera}
        />
      )):
      paises_filtrados.map((p) => (
        <ReducidoPais
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          continente={p.continente}
          imgBandera={p.imagen_de_la_bandera}
        />
      ))
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    paises_filtrados: state.paises_filtrados,
  };
};

export default connect(mapStateToProps,{fetchFilterContinente})(ListaPsFiltrada);
