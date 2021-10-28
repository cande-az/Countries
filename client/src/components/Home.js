import React from "react";

import { connect } from "react-redux";
import { fetchFilterContinente } from "../actions/index";
import ListaMadrePaises from "./ListaMadrePaises";

function Home({ paises, paises_filtrados }) {
  const[filtrado, setFiltrado] =React.useState(false)
  const[ordenado, setOrdenadoo] =React.useState(false)
  const[continente, setContinente] =React.useState('')


  function handleOnChange(e) {
    e.preventDefault();
    //console.log(e.target.name)
    setContinente(e.target.name);
    setFiltrado(true)
  }

  function handleOnClick(e) {
    e.preventDefault();
    console.log("hola");
  }

  function ordenAsc(e,paises){
    e.preventDefault();
    if(filtrado){
      paises_filtrados.sort(function (paisA, paisB) {
        if (paisA.nombre < paisB.nombre) {
          return 1;
        }
        if (paisA.nombre > paisB.nombre) {
          return -1;
        }
        return 0;
      })
    } else{
      paises.sort(function (paisA, paisB) {
        if (paisA.nombre < paisB.nombre) {
          return 1;
        }
        if (paisA.nombre > paisB.nombre) {
          return -1;
        }
        return 0;
      })
    }
    
    setOrdenadoo(true)
    console.log(paises)
  }

    function ordenDes(e,paises){
    e.preventDefault();
    paises.sort(function (paisA, paisB) {
      if (paisA.nombre > paisB.nombre) {
        return 1;
      }
      if (paisA.nombre < paisB.nombre) {
        return -1;
      }
      return 0;
    })
    setOrdenadoo(true)
    console.log(paises)
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
      <form onChange={(e) => handleOnClick(e)}>
      <button onClick={(e)=>(ordenAsc(e,paises))}>Asc</button>
      <button onClick={(e)=>(ordenDes(e,paises))}>Desc</button>
      </form>

      <h3>Paises</h3>

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
  };
};

export default connect(mapStateToProps)(Home);
