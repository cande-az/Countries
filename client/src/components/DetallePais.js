import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPais } from "../actions/index";

function CompletoPais() {
  const { id } = useParams();
  const pais = useSelector((state) => state.detallePais);
  const dispatch = useDispatch();
  const [actividades, setActividades] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  React.useEffect(() => {
    if(!pais.length){
      dispatch(fetchPais(id, setCargando));
      setActividades(pais.activities);
    }
    //eslint-disable-next-line
  }, [dispatch, id,cargando,pais.length]);

  //

  function arreglaCapital(cap) {
    if (typeof cap === "string") {
      let copia = cap;
      //eslint-disable-next-line
      let aplica = copia.replace(/[&\/\\#+()$~%-.":*?<>{}]/g, " ");
      return aplica;
    }
  }

  //console.log(pais);
  return (
    <>
      {cargando? <p>Cargando...</p> : (
        <div>
          <div>
            <h2>{pais.nombre}</h2>

            <h4>Continente:</h4>
            <p>{pais.continente}</p>

            <h4>Bandera:</h4>
            <img
              style={{ width: "5em" }}
              src={pais.imagen_de_la_bandera}
              alt={`Bandera de ${pais.nombre}`}
            />
          </div>
          <div>
            <h3>Detalles</h3>
            <ul>
              <li>Codigo Pais: {pais.id}</li>
              <li>Capital:{arreglaCapital(pais.capital)}</li>
              <li>Subregión: {pais.subregion}</li>
              <li>Área: {pais.area} km2</li>

              {/* Crear forma para agregar . */}
              <li>Población: {pais.poblacion}</li>
            </ul>

            <h3>Actividades</h3>
            {actividades.length ? (
              actividades.map((act) => (
                <section key={act.id}>
                  <h5>{act.nombre}</h5>
                  <p>Dificultad: {act.dificultad}</p>
                  <p>Temporada: {act.temporada}</p>
                </section>
              ))
            ) : (
              <p>No hay actividades disponibles</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default CompletoPais;
