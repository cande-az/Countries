import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Actividades.module.css";

function Actividades({ reducida = false }) {
  const actividades = useSelector((state) => state.actividades);

  return (
    <div>
      {reducida
        ? actividades.map((act, index) => {
            if (index <= 3) {
              return (
                <section className={style.tarjetaAct} key={act.id}>
                <img
                  src={act.imagen_identificatoria}
                  /* style={{ width: "24em" }} */
                  className={style.imagen}
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
        : actividades.map((act) => (
            <section key={act.id}>
              <h3>{act.nombre}</h3>
              <p>Dificultad: {act.dificultad}</p>
              <p>Temporada: {act.temporada}</p>
              <img src={act.imagen_identificatoria} style={{ width: "24em" }} />
            </section>
          ))}

      {/* {actividades.length &&
        } */}
    </div>
  );
}

export default Actividades;
