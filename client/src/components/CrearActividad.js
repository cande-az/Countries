import React from "react";

function CrearActividad() {
  return (
    <div>
      <form>
        <section>
          <label>Nombre</label>
          <input></input>
        </section>

        <section>
        <label>Dificultad</label>
        <input></input>
        </section>

        <section>
        <label>Duración</label>
        <input></input>
        </section>

        <section>
        <label>Temporada</label>
        <input></input>
        </section>

        <section>
        <label>Paises</label>
        <input></input>
        </section>
        {/* Buscar paises de un lista y agregarlos */}

        <button type="submit">Crear actividad</button>
      </form>
    </div>
  );
}

export default CrearActividad;
