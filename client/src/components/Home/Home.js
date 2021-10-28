import React from "react";

import{ordenAsc,ordenDes} from "./FunOrdenamiento"
import { connect } from "react-redux";
import ListaMadrePaises from "../ListaMadrePaises";
//import { axiosPaises } from "../actions/index";

function Home({ paises, paises_filtrados,busqTerm }) {
  const[filtrado, setFiltrado] =React.useState('desactivado')
  const[ordenado, setOrdenado] =React.useState('desactivado')
  const[continente, setContinente] =React.useState('')


  function handleOnChange(e) {
    e.preventDefault();
    setContinente(e.target.name);
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

      <h5>Tipo de Actividad</h5>
      <button>dificultad o tipos?</button>

      <h4>Ordenar</h4>
      <form onChange={(e) => handleOnClick(e)}>
      <button onClick={(e)=>(ordenAsc(e,paises,paises_filtrados,filtrado,setOrdenado))}>Asc</button>
      <button onClick={(e)=>(ordenDes(e,paises,paises_filtrados,filtrado,setOrdenado))}>Desc</button>
      </form>

      <h3>Paises</h3>
{

}
      <ListaMadrePaises
      filter={filtrado}
      ordenado={ordenado}
      nombreCon={continente}/>
     
      <p>ARMAR PAGINADO</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    paises: state.paises,
    paises_filtrados: state.paises_filtrados,
    busqTerm: state.busqTerm,

  };
};

export default connect(mapStateToProps)(Home);
