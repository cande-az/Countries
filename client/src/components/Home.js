import React from "react";
import ListaPaises from "./ListaPaises";
import ListaPsFiltrada from "./ListaPsFiltrada"
import { connect } from "react-redux";
import { fetchFilterContinente } from "../actions/index";

function Home({ fetchFilterContinente, paises_filtrados }) {
  const[filtrado, setFiltrado] =React.useState(false)

  function handleOnChange(e) {
    e.preventDefault();
    //console.log(e.target.name)
    fetchFilterContinente(e.target.name);
    setFiltrado(true)
  }

  function handleOnClick(e) {
    e.preventDefault();
    console.log("hola");
  }

  return (
    <div>
      <h4>Filtrar</h4>

      <h5>Continente</h5>
      <form onChange={(e) => handleOnClick(e)}>
        <button
          name="Asia"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Asia
        </button>
        <button
          name="Oceania"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Oceania
        </button>
        <button
          name="Europe"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Europe
        </button>
        <button
          name="Americas"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Americas
        </button>
        <button
          name="Africa"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Africa
        </button>
        <button
          name="Antarctic"
          onClick={(e) => {
            handleOnChange(e);
          }}
        >
          Antarctic
        </button>
      </form>
      {console.log(paises_filtrados[0])}

      <h5>Tipo de Actividad</h5>
      <button>dificultad o tipos?</button>

      <h4>Ordenar</h4>
      <button>Asc</button>
      <button>Desc</button>
      <h3>Paises</h3>

      {filtrado ? <ListaPsFiltrada/> : <ListaPaises />}

      <p>ARMAR PAGINADO</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    paises_filtrados: state.paises_filtrados,
  };
};

export default connect(mapStateToProps, { fetchFilterContinente })(Home);
