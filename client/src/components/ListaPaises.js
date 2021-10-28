import React from "react";
import ReducidoPais from "./ReducidoPais";
import { connect } from "react-redux";
import { axiosPaises } from "../actions/index";

function ListaPaises({ ordenando, paises, axiosPaises, busqTerm }) {
  const [carga, setCarga] = React.useState(false);

  React.useEffect(() => {
    axiosPaises();
    setCarga(true);
    console.log(busqTerm)
  }, [axiosPaises,busqTerm]);

  return (
    <div>
      {busqTerm
        ? paises
            .filter((p) => p.nombre.includes(busqTerm) || !busqTerm)
            .map((p) => (
              <ReducidoPais
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                continente={p.continente}
                imgBandera={p.imagen_de_la_bandera}
              />
            ))
        : paises.map((p) => (
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
    filtro: state.filterAD,
    busqTerm: state.busqTerm,
  };
};

export default connect(mapStateToProps, { axiosPaises })(ListaPaises);
