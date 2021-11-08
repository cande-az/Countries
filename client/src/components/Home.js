import React from "react";
import style from "./Home.module.css";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import TarjetaPais from "./TarjetaPais";
import { useDispatch, useSelector } from "react-redux";
import { axiosPaises, fetchTodasActividades } from "../actions/index";
import { orderNombre, orderPoblacion, orderDesactiva } from "../actions/index";
import { fetchFilterContinente, fetchFilterActivity } from "../actions/index";
import Paginacion from "./Paginacion";
import Actividades from "./Actividades";
//import { axiosPaises } from "../actions/index";

function Home() {
  const paises = useSelector((state) => state.paises);
  const actividades = useSelector((state) => state.actividades);
  const dispatch = useDispatch();
  const [ordenado, setOrdenado] = React.useState("");
  const [filtrado, setFiltrado] = React.useState({
    continente: "",
    actividades: "",
  });

  //paginacion
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [paisesPerPage, setPaisesPerPage] = React.useState(9);

  React.useEffect(() => {
    if (!paises.length) {
      dispatch(axiosPaises(setLoading));
    }
    //eslint-disable-next-line
    dispatch(fetchTodasActividades());
    //eslint-disable-next-line
  }, [dispatch]);

  //Paginacion

  //Saber las paginas
  let indiceUltimoPais = currentPage * paisesPerPage;
  let indicePrimerPais = indiceUltimoPais - paisesPerPage;
  let paisesActuales = paises.slice(indicePrimerPais, indiceUltimoPais);

  function paginar(numero) {
    return setCurrentPage(numero);
  }

  function handleOnChangeFilt(e) {
    setLoading(true);
    e.preventDefault();
    if (e.target.value === "desac") {
      e.target.value = "All";
    }

    setFiltrado(() => {
      return {
        ...filtrado,
        continente: e.target.value,
        actividades: filtrado.actividades,
      };
    });

    if (filtrado.actividades !== "desac") {
        dispatch(
          fetchFilterActivity(filtrado.actividades, setLoading, e.target.value)
        );
    } 
    setCurrentPage(1);
    setLoading(false);
  }

  function handleOnChangeOrd(e) {
    setLoading(true);
    e.preventDefault();


    //desact
    if (e.target.value.includes("desac")) {
      setOrdenado("desac")
      console.log(filtrado.continente)
      dispatch(orderDesactiva(filtrado.continente));
    }

    //Nombre
    if (e.target.value.includes("Nombre")) {
      dispatch(orderNombre(e.target.value));
    }
    if (e.target.value.includes("Poblacion")) {
      dispatch(orderPoblacion(e.target.value));
    }
    setCurrentPage(1);
    setOrdenado(e.target.value);
    setLoading(false);
  }

  function handleOnChangeFiltAct(e) {
    e.preventDefault();
    if (e.target.value === "") {
      setFiltrado(() => {
        return {
          ...filtrado,
          actividades: e.target.value,
        };
      });
      if (ordenado.length) {
        dispatch(fetchFilterContinente(filtrado.continente, true, ordenado));
      } else {
        dispatch(fetchFilterContinente(filtrado.continente));}


    } else {
      setFiltrado(() => {
        return {
          ...filtrado,
          actividades: e.target.value,
        };
      });
      console.log(filtrado.actividades);

      if (ordenado && filtrado.continente) {
        dispatch(
          fetchFilterActivity(
            filtrado.actividades,
            setLoading,
            filtrado.continente,
            ordenado
          )
        );
      } else if (!e.target.value.length || !filtrado.actividades.length) {
        if (filtrado.continente && ordenado) {
          dispatch(fetchFilterContinente(filtrado.continente, true, ordenado));
        } else if (filtrado.continente) {
          dispatch(fetchFilterContinente(filtrado.continente));
        } else if (ordenado) {
          if (ordenado.includes("Nombre")) {
            dispatch(orderNombre(e.target.value));
          }
          if (ordenado.includes("Poblacion")) {
            dispatch(orderPoblacion(e.target.value));
          }
        } else {
          dispatch(axiosPaises());
        }
      } else {
        dispatch(fetchFilterActivity(e.target.value, setLoading));
      }
    }
  }

  function limpiaFiltros(e){
    if(e){e.preventDefault()}
    dispatch(axiosPaises())
    setFiltrado(() => {
      return {
        ...filtrado,
        actividades: "",
        continente:"desac"
      };
    });
    setOrdenado("desac")
  }

  return (
    <div className={style.bodyGEN}>
      <div className={style.headerComplete}>
        <div className={style.headerBack}></div>

        <div className={style.ilustracion}>
          <div className={style.siluet}></div>
          <div className={style.siluetLine}></div>
        </div>

        <div className={style.header}>
          <Link to="/s/home">
            <div className={style.headerIcono}></div>
          </Link>

          <SearchBar className={style.search} setCurrentPage={setCurrentPage} limpiaFiltros={limpiaFiltros}/>
        </div>
      </div>

      <div className={style.bodyGen}>
        <div className={style.paisesCont}>
          {/* BARRA FILTROS */}
          <div className={style.FiltrosCont}>
            <div className={style.filtAling}>
              <h5>
                Continente:{" "}
                <select
                  onChange={(e) => {
                    handleOnChangeFilt(e);
                  }}
                  value={filtrado.continente}
                >
                  <option value="all">Todos</option>
                  <option>Asia</option>
                  <option>Oceania</option>
                  <option>Europe</option>
                  <option>Americas</option>
                  <option>Africa</option>
                  <option>Antarctic</option>
                </select>
              </h5>
              <button
                value="desac"
                onClick={(e) => {
                  handleOnChangeFilt(e);
                }}
              >
                Borrar
              </button>
            </div>

            <div className={style.filtAling}>
              <h5>Tipo de Actividad</h5>
              <input
                placeholder="Ingresa una actividad..."
                list="actividades"
                onChange={(e) => handleOnChangeFiltAct(e)}
                value={filtrado.actividades}
              />
              <datalist id="actividades">
                {actividades.map((act) => (
                  <option key={act.id} value={act.nombre}>
                    {act.nombre}
                  </option>
                ))}
              </datalist>
              <button value="" onClick={(e) => handleOnChangeFiltAct(e)}>
                Borrar
              </button>
            </div>

            <div className={style.filtAling}>
              <h4>
                Ordenar:{" "}
                <select
                  onChange={(e) => {
                    handleOnChangeOrd(e);
                  }}
                  value={ordenado}
                >
                  <option value="desac">Elige una opcion</option>
                  <option value="Desc-Nombre">a - Z (Nombre)</option>
                  <option value="Asc-Nombre">z - A (Nombre)</option>
                  <option value="Desc-Poblacion">m - M (Poblacion)</option>
                  <option value="Asc-Poblacion">M - m (Poblacion)</option>
                </select>
              </h4>
              <button
                value="desac"
                onClick={(e) => {
                  handleOnChangeOrd(e);
                }}
              >
                Borrar
              </button>
            </div>
            <button onClick={(e) => {limpiaFiltros(e)}}>Eliminar Filtros</button>
          </div>

          {/* TARJETAS PAISES */}
          <div className={style.tarjetasPaiCont}>
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
          </div>

          {/* PAGINACION */}
          <div className={style.paginacion}>
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
              className={style.number}
              href="#a"
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
              className={style.number}
              href="#a"
            >
              {">>"}
            </a>
          </div>
        </div>

        <div className={style.actividadesCont}>
          <div className={style.actividadesTitle}>
            <h4 className={style.titleAct}>Actividades</h4>
            <Link to="/actividades/crear">
              <button className={style.buttonOrange}>Crear Actividad</button>
            </Link>
          </div>

          <Actividades reducida={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
