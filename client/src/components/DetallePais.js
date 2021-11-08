import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPais } from "../actions/index";
import { Link } from "react-router-dom";
import Map from "./Map";
import style from "./DetallePais.module.css";

function CompletoPais() {
  const { id } = useParams();
  const pais = useSelector((state) => state.detallePais);
  const dispatch = useDispatch();
  const [actividades, setActividades] = React.useState([]);
  const [cargando, setCargando] = React.useState(true);

  React.useEffect(() => {
    if (!pais.length) {
      dispatch(fetchPais(id, setCargando));
      setActividades(pais.activities);
    }
    //eslint-disable-next-line
  }, [dispatch, id, cargando, pais.length]);

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
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className={style.bodyAct}>
          <div className={style.panel}>
            <Link to="/home">
              <div className={style.backButton}></div>
            </Link>

            <div className={style.polaroid}>
              <img
                src={pais.imagen_de_la_bandera}
                alt={`Bandera de ${pais.nombre}`}
                className={style.bandera}
              />
            </div>

            <div className={style.datosPais}>
              <h2 className={style.countryName}>{pais.nombre}</h2>

              <p className={style.continenteName}>{pais.continente}</p>
            </div>

            <div className={style.marcoMaps}>
              <Map lat={pais.coordenadas[0]} lng={pais.coordenadas[1]} />
              <div className={style.cinta1}></div>
              <div className={style.cinta2}></div>
            </div>
          </div>

          <div className={style.panelDerecha}>
            <div className={style.panelDetail}>
              <ul className={style.detalles}>
                <li>Codigo Pais: {pais.id}</li>
                <li>Capital:{arreglaCapital(pais.capital)}</li>
                <li>Subregión: {pais.subregion}</li>
                <li>Área: {pais.area} km2</li>

                {/* Crear forma para agregar . */}
                <li>Población: {pais.poblacion}</li>
              </ul>
            </div>

            <div>
              <h3 className={style.actividadTitulo}>Actividades</h3>
              <div className={style.contenedorActividades}>
                {actividades.length ? (
                  actividades.map((act) => (
                    <div className={style.tarjetaAct} key={act.id}>
                      <img
                        src={act.imagen_identificatoria}
                        /* style={{ width: "24em" }} */
                        className={style.imagen}
                      />
                      <div className={style.tag}>
                        <h5 className={style.actividad}>{act.nombre}</h5>

                        <div className={style.tags}>
                          <p className={style.difi}>
                            Dificultad {act.dificultad}
                          </p>
                          <p className={style.temp}>{act.temporada}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay actividades disponibles</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CompletoPais;
