import React from "react";
import ReducidoPais from "./ReducidoPais";
import { fetchFilterContinente } from "../actions/index";
import { connect } from "react-redux";

function ListaPsFiltrada({ nombreCon,ordenando,paises_filtrados }) {
  const [carga,setCarga] = React.useState(false)

  React.useEffect(() => {
    fetchFilterContinente(nombreCon)
    setCarga(true)
  }, [fetchFilterContinente]);

  return (
    <div>
      {ordenando ? paises_filtrados[0].map((p) => (
        <ReducidoPais
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          continente={p.continente}
          imgBandera={p.imagen_de_la_bandera}
        />
      )):
      paises_filtrados[0].map((p) => (
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
