import React from "react";
import { Link} from "react-router-dom";
import style from "./TarjetaPais.module.css";

//1Yqifzyyk9Ic1O5EAxeAEKXgDe4BaofiB

function TarjetaPais({ id, nombre, continente, imgBandera, poblacion }) {
  function formatPOB(pob) {
    return new Intl.NumberFormat("de-DE").format(pob);
  }

  return (
    <div className={style.contenedorFondo}>
      <div className={style.contenedor}>
        <Link to={`/paises/${id}`}>
          <div className={style.tag}>
            <div className={style.contenedorNom}>
              <h2 className={style.datosNom}>{nombre}</h2>
            </div>
          </div>

          <div className={style.pass}>
            <h4 className={style.passport}>passport</h4>
            <img
              className={style.bandera}
              src={imgBandera}
              alt={`Bandera de ${nombre}`}
            />
          </div>

          <p className={style.continenteName}>{continente}</p>

          <h4 className={style.poblacionTitulo}>Poblacion</h4>
          <p className={style.poblacion}>{formatPOB(poblacion)}</p>
        </Link>
      </div>
    </div>
  );
}

export default TarjetaPais;
