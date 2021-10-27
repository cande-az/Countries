import React from "react";
import { connect } from "react-redux";
import {useParams} from "react-router-dom"
import {fetchPais} from "../actions/index"


function CompletoPais ({pais, fetchPais}) {
  const {id} = useParams()

  React.useEffect(() => {
    fetchPais(id)
  }, [fetchPais,id]);
  
  console.log(pais)
  return (
    <div>
       <div>
          <h2>{pais.nombre}</h2>

          <h4>Continente:</h4>
          <p>{pais.continente}</p>

          <h4>Bandera:</h4>
          <img 
          style={{width: "5em"}}
          src={pais.imagen_de_la_bandera} 
          alt={`Bandera de ${pais.nombre}`} />
        </div>
      <div>
        <h3>Detalles</h3>
        <ul>
          <li>Codigo Pais: {pais.id}</li>
          <li>Capital:{pais.capital}</li>
          <li>Subregión: {pais.subregion}</li>
          <li>Área: {pais.area} km2</li>

          {/* Crear forma para agregar . */}
          <li>Población: {pais.poblacion}</li>
        </ul>


        <h3>Actividades</h3>
        <ul>Lista Actividades</ul>
        {/* Componente Lista Actividades */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pais: state.detallePais,
  };
};

export default connect(mapStateToProps, {fetchPais})(CompletoPais);
