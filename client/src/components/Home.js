import React from 'react'
import ListaPaises from './ListaPaises'

function Home() {
    return (
        <div>
            
           <h4>Filtros</h4>

           <label htmlFor='continentes'>continente</label>
           <select id='continentes'>
           <option value="america">America</option>
           </select>

           <label htmlFor='actividad'>tipo de actividad turística</label>
           <select id='actividad'>
           <option value="AireLibre">Aire Libre</option>
           </select>

           <h4>Ordenar</h4>

           <label htmlFor='poblacion'>poblacion</label>
           <select id='poblacion'>
           <option value="asc">asc</option>
           <option value="desc">desc</option>
           </select>

           <label htmlFor='pais'>pais</label>
           <select id='pais'>
           <option value="asc">{`A < Z`}</option>
           <option value="desc">{`A > Z`}</option>
           </select>

           <h3>Paises</h3>

           <ListaPaises/>

           <p>ARMAR PAGINADO</p>

        </div>
    )
}

export default Home
