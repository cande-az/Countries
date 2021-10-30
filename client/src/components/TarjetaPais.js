import React from 'react'
import { Link } from 'react-router-dom'

function TarjetaPais({ id,nombre, continente, imgBandera,poblacion }) {
    
    function formatPOB(pob){
        return new Intl.NumberFormat("de-DE").format(pob)
      }      
    
    return (
        <div>
            <Link to={`/s/paises/${id}`}>
                <h2>{nombre}</h2>
            </Link>


            <h4>Continente:</h4>
            <p>{continente}</p>

            <h4>Poblacion:</h4>
            <p>{formatPOB(poblacion)}</p>

            <h4>Bandera:</h4>
            <img
                style={{ width: "5em" }}
                src={imgBandera}
                alt={`Bandera de ${nombre}`} />
        </div>
    )
}

export default TarjetaPais
