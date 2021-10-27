import React from 'react'
import { Link } from 'react-router-dom'

function ReducidoPais({ id,nombre, continente, imgBandera }) {
    return (
        <div>
            <Link to={`/s/paises/${id}`}>
                <h2>{nombre}</h2>
            </Link>


            <h4>Continente:</h4>
            <p>{continente}</p>

            <h4>Bandera:</h4>
            <img
                style={{ width: "5em" }}
                src={imgBandera}
                alt={`Bandera de ${nombre}`} />
        </div>
    )
}

export default ReducidoPais
