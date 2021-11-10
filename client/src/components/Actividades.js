import React from "react";
import { useSelector } from "react-redux";
import style from "./Actividades.module.css";

function Actividades({ reducida = false }) {
  const actividades = useSelector((state) => state.actividades);

  return (
    <>
      {reducida
      //eslint-disable-next-line
        ? actividades.map((act, index) =>{
            if (index <= 2) {
              return (
                <section className={style.tarjetaAct} key={act.id}>
                <img
                  src={act.imagen_identificatoria}
                  /* style={{ width: "24em" }} */
                  className={style.imagen}
                  alt={`Imagen de ${act.nombre}`}
                />
                <div className={style.tag}>
                  <h5 className={style.actividad}>{act.nombre}</h5>

                  <div className={style.tags}>
                    <p className={style.difi}>Dificultad {act.dificultad}</p>
                    <p className={style.temp}>{act.temporada}</p>
                  </div>
                </div>
              </section>
              );
            }
          })
        : actividades.map((act) => 
            <section key={act.id}>
              <h3>{act.nombre}</h3>
              <p>Dificultad: {act.dificultad}</p>
              <p>Temporada: {act.temporada}</p>
              <img src={act.imagen_identificatoria} style={{ width: "24em" }} 
              alt={`Imagen de ${act.nombre}`}/>
            </section>
          )}

    </>
  );
}

export default Actividades;
