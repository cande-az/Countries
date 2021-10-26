import React from 'react'

function CrearActividad() {
    return (
        <div>
            <form>
                <label>Nombre</label>

                <label>Dificultad</label>

                <label>Duración</label>

                <label>Temporada</label>

                <label>Paises</label>
                {/* Buscar paises de un lista y agregarlos */}

                <button type='submit'>Crear actividad</button>

            </form>
        </div>
    )
}

export default CrearActividad
