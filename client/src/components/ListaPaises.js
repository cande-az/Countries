import React from "react";
import ReducidoPais from "./ReducidoPais";
import { connect } from "react-redux";
import { axiosPaises, orderFront } from "../actions/index";

function ListaPaises({ ordenando, paises, axiosPaises }) {
  const [carga, setCarga] = React.useState(false);

  React.useEffect(() => {
    axiosPaises();
    setCarga(true);
  }, [axiosPaises]);


  return (
    <div>
      {carga && ordenando === undefined
        ? paises.map((p) => (
            <ReducidoPais
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              continente={p.continente}
              imgBandera={p.imagen_de_la_bandera}
            />
          ))
        : !ordenando
        ? paises.map((p) => (
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
          ))
        }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    paises: state.paises,
    filtro: state.filterAD,
  };
};

export default connect(mapStateToProps, { axiosPaises, orderFront })(
  ListaPaises
);
