import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import TarjetaPais from "./TarjetaPais";
import { useDispatch, useSelector } from "react-redux";
import { axiosPaises,fetchTodasActividades } from "../actions/index";
import { orderNombre, orderPoblacion } from "../actions/index";
import { fetchFilterContinente,fetchFilterActivity } from "../actions/index";
import Paginacion from "./Paginacion";
//import { axiosPaises } from "../actions/index";

function Home() {
  const paises = useSelector((state) => state.paises);
  const actividades = useSelector((state) => state.actividades);
  const dispatch = useDispatch();
  const [ordenado, setOrdenado] = React.useState("");
  const [continente, setContinente] = React.useState("");

  //paginacion
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [paisesPerPage, setPaisesPerPage] = React.useState(10);

  React.useEffect(() => {
    if (!paises.length) {
      dispatch(axiosPaises(setLoading));
    }
    //eslint-disable-next-line
      dispatch(fetchTodasActividades())
    //eslint-disable-next-line
  }, [dispatch]);

  //Paginacion

  //Saber las paginas
  let indiceUltimoPais = currentPage * paisesPerPage;
  let indicePrimerPais = indiceUltimoPais - paisesPerPage;
  let paisesActuales = paises.slice(indicePrimerPais, indiceUltimoPais);

  //Cambiar la pagina
  let numPrev = [];
  let numNext = [];

  function paginar(numero, lastPage) {
    if (numero === 1) {
      numPrev[0] = 1;
      numNext[0] = numero + 1;
    } else if (numero === lastPage) {
      numPrev[0] = numero - 1;
      numNext[0] = numero;
    } else {
      numPrev[0] = numero - 1;
      numNext[0] = numero + 1;
    }
    return setCurrentPage(numero);
  }

  function handleOnChangeFilt(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (ordenado.length) {
      dispatch(fetchFilterContinente(e.target.value, true, ordenado));
    } else {
      dispatch(fetchFilterContinente(e.target.value));
    }
    setCurrentPage(1);
    console.log(continente);
  }

  function handleOnChangeOrd(e) {
    e.preventDefault();
    console.log(e.target.value);

    //Nombre
    if (e.target.value.includes("Nombre")) {
      dispatch(orderNombre(e.target.value));
    }
    if (e.target.value.includes("Poblacion")) {
      dispatch(orderPoblacion(e.target.value));
    }
    setCurrentPage(1);
    setOrdenado(e.target.value);
    console.log(ordenado);
  }

  function handleOnChangeFiltAct(e){
    e.preventDefault()
    dispatch(fetchFilterActivity(e.target.value))
  }

  return (
    <div>
      <SearchBar setCurrentPage={setCurrentPage} />

      <h4>Filtrar</h4>

      <div>
        <h5>
          Continente:{" "}
          <select
            onChange={(e) => {
              handleOnChangeFilt(e);
            }}
          >
            <option value="desac">Elige una opcion</option>
            <option>Asia</option>
            <option>Oceania</option>
            <option>Europe</option>
            <option>Americas</option>
            <option>Africa</option>
            <option>Antarctic</option>
          </select>
        </h5>
      </div>

      <h5>Tipo de Actividad</h5>
      <input placeholder="Ingresa una actividad..." list="actividades"
      onChange={(e) => handleOnChangeFiltAct(e)}/>
      <datalist id="actividades">
         {actividades.map((act) => 
         <option key={act.id}>{act.nombre}</option>)}
      </datalist>

      <div>
        <h4>
          Ordenar:{" "}
          <select
            onChange={(e) => {
              handleOnChangeOrd(e);
            }}
          >
            <option value="desactivado">Elige una opcion</option>
            <option value="Desc-Nombre">a - Z (Nombre)</option>
            <option value="Asc-Nombre">z - A (Nombre)</option>
            <option value="Asc-Poblacion">Asc-Poblacion</option>
            <option value="Desc-Poblacion">Desc-Poblacion</option>
          </select>
        </h4>
      </div>

      <Link to="/s/actividades/crear">
        <button>Crear Actividad</button>
      </Link>

      <h3>Paises</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        paisesActuales.map((p) => (
          <TarjetaPais
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            continente={p.continente}
            imgBandera={p.imagen_de_la_bandera}
            poblacion={p.poblacion}
          />
        ))
      )}

      <div>
        <a
          onClick={() => {
            let num = currentPage;
            let numAnt = num - 1;
            if (numAnt === 0) {
              setCurrentPage(numAnt + 1);
            } else {
              setCurrentPage(numAnt);
            }
            setTimeout(() => {
              console.log(currentPage);
            }, 1500);
          }}
          href="#"
        >
          {"<<"}
        </a>
        <Paginacion
          paisesPerPage={paisesPerPage}
          totalPaises={paises.length}
          paginar={paginar}
        />
        <a
          onClick={() => {
            let num = currentPage;
            let numNex = num + 1;
            let ultimaPag = Math.ceil(paises.length / paisesPerPage);
            if (num === ultimaPag) {
              setCurrentPage(num);
            } else {
              setCurrentPage(numNex);
              setTimeout(() => {
                console.log(currentPage);
              }, 1500);
            }
          }}
          href="#"
        >
          {">>"}
        </a>
      </div>
    </div>
  );
}

export default Home;
