import React from "react";
import ReducidoPais from "./ReducidoPais";
import { connect } from "react-redux";
import {axiosPaises} from "../actions/index"

function ListaPaises({ paises,axiosPaises }) {

  React.useEffect(() => {
    axiosPaises()
  }, [axiosPaises]);

  return (
    <div>
      while(paises.length){}
      {paises.map((p) => (
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
    paises: state.paises,
  };
};

export default connect(mapStateToProps,{axiosPaises})(ListaPaises);
