import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function Landing() {
  return (
    <>
      <div className={style.headerIcono}></div>
      <Link to="/home">
        <button className={style.button}>Ingresar</button>
      </Link>
      <div className={style.contMundo}>
        <div className={style.mundo}></div>
        <div className={style.avionD}></div>
        <div className={style.avionI}></div>
      </div>
    </>
  );
}

export default Landing;
