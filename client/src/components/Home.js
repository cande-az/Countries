import React from "react";
import style from "./Home.module.css";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import TarjetaPais from "./TarjetaPais";
import { useDispatch, useSelector } from "react-redux";

import {
  axiosPaises,
  fetchTodasActividades,
} from "../actions/index";
import { orderNombre, orderPoblacion } from "../actions/index";

import { fetchFilterContinente, fetchFilterActivity } from "../actions/index";
import Paginacion from "./Paginacion";
import Actividades from "./Actividades";
//import { axiosPaises } from "../actions/index";

function Home() {
  document.title = "Home";
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
  const [paisesPerPage] = React.useState(9);

  React.useEffect(() => {
    dispatch(axiosPaises(setLoading));
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

  //FILTRO CONTINENTE
  function handleOnChangeFilt(e) {
    setLoading(true);
    e.preventDefault();
    if (e.target.value === "desac") {
      e.target.value = "all";
    }

    setFiltrado(() => {
      return {
        ...filtrado,
        continente: e.target.value,
      };
    });

    if (
      filtrado.actividades !== "desac" &&
      filtrado.actividades !== "" &&
      ordenado !== "desac" &&
      ordenado !== ""
    ) {
      dispatch(
        fetchFilterActivity(
          filtrado.actividades,
          setLoading,
          e.target.value,
          ordenado
        )
      );
    } else if (
      filtrado.actividades !== "desac" &&
      filtrado.actividades !== ""
    ) {
      dispatch(
        fetchFilterActivity(filtrado.actividades, setLoading, e.target.value)
      );
    } else if (ordenado !== "desac" && ordenado !== "") {
      dispatch(fetchFilterContinente(e.target.value, true, ordenado));
    } else {
      console.log("entra");
      dispatch(fetchFilterContinente(e.target.value));
    }

    setCurrentPage(1);
    setLoading(false);
  }

  //FILTRO ACTIVIDADES
  function handleOnChangeFiltAct(e) {
    setLoading(true);
    e.preventDefault();

    setFiltrado(() => {
      return {
        ...filtrado,
        actividades: e.target.value,
      };
    });

    if (e.target.value.length) {
      if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All" &&
        ordenado !== "desac" &&
        ordenado !== ""
      ) {
        dispatch(
          fetchFilterActivity(
            e.target.value,
            setLoading,
            filtrado.continente,
            ordenado
          )
        );
      } else if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(
          fetchFilterActivity(e.target.value, setLoading, filtrado.continente)
        );
      } else if (ordenado !== "desac" && ordenado !== "") {
        dispatch(
          fetchFilterActivity(e.target.value, setLoading, false, ordenado)
        );
      } else {
        dispatch(fetchFilterActivity(e.target.value, setLoading));
      }
    } else {
      if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All" &&
        ordenado !== "desac" &&
        ordenado !== ""
      ) {
        dispatch(fetchFilterContinente(filtrado.continente, true, ordenado));
      } else if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(fetchFilterContinente(filtrado.continente));
      } else if (ordenado !== "desac" && ordenado !== "") {
        if (e.target.value.includes("Nombre")) {
          dispatch(orderNombre(e.target.value));
        }
        if (e.target.value.includes("Poblacion")) {
          dispatch(orderPoblacion(e.target.value));
        }
      } else {
        dispatch(axiosPaises(setLoading));
      }
    }
    setCurrentPage(1);
    setLoading(false);
  }

  //ORDENAMIENTOS FILTRO
  function handleOnChangeOrd(e) {
    setLoading(true);
    e.preventDefault();
    setOrdenado(e.target.value);

    //desact
    if (e.target.value.includes("desac")) {
      if (
        filtrado.actividades.length &&
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(
          fetchFilterActivity(
            filtrado.actividades,
            setLoading,
            filtrado.continente
          )
        );
      } else if (filtrado.actividades.length) {
        dispatch(fetchFilterActivity(filtrado.actividades, setLoading));
      } else if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(fetchFilterContinente(filtrado.continente));
      } else {
        dispatch(axiosPaises());
      }
    }

    //activado
    if (!e.target.value.includes("desac")) {
      if (
        filtrado.actividades.length &&
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(
          fetchFilterActivity(
            filtrado.actividades,
            setLoading,
            filtrado.continente,
            e.target.value
          )
        );
      } else if (filtrado.actividades.length) {
        dispatch(
          fetchFilterActivity(
            filtrado.actividades,
            setLoading,
            false,
            e.target.value
          )
        );
      } else if (
        filtrado.continente !== "all" &&
        filtrado.continente !== "" &&
        filtrado.continente !== "desac" &&
        filtrado.continente !== "All"
      ) {
        dispatch(
          fetchFilterContinente(filtrado.continente, true, e.target.value)
        );
      } else {
        //Nombre
        if (e.target.value.includes("Nombre")) {
          dispatch(orderNombre(e.target.value));
        }
        //poblacion
        if (e.target.value.includes("Poblacion")) {
          dispatch(orderPoblacion(e.target.value));
        }
      }
    }

    setCurrentPage(1);
    setOrdenado(e.target.value);
    setLoading(false);
  }

  //BORRADOR FILTROS GENERAL
  function limpiaFiltros(e) {
    if (e) {
      e.preventDefault();
    }
    dispatch(axiosPaises());
    setFiltrado(() => {
      return {
        ...filtrado,
        actividades: "",
        continente: "desac",
      };
    });
    setOrdenado("desac");
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

          <SearchBar
            className={style.search}
            setCurrentPage={setCurrentPage}
            limpiaFiltros={limpiaFiltros}
          />
        </div>
      </div>

      <div className={style.bodyGen}>
        <div className={style.paisesCont}>
          {/* BARRA FILTROS */}
          <div className={style.FiltrosCont}>
            <div className={style.filtAling}>
              <h5 className={style.tituloFilter}>Continente</h5>
              <select
                onChange={(e) => {
                  handleOnChangeFilt(e);
                }}
                value={filtrado.continente}
                className={style.selectedFilter}
              >
                <option value="all">Todos</option>
                <option>Asia</option>
                <option>Oceania</option>
                <option>Europe</option>
                <option>Americas</option>
                <option>Africa</option>
                <option>Antarctic</option>
              </select>

              <button
                value="desac"
                onClick={(e) => {
                  handleOnChangeFilt(e);
                }}
                className={
                  filtrado.continente === "desac" ||
                  filtrado.continente === "all"
                    ? style.borrarButtonHide
                    : filtrado.continente === "" ||
                      filtrado.continente === "All"
                    ? style.borrarButtonHide
                    : style.borrarButton
                }
              >
                Borrar
              </button>
            </div>

            <div className={style.filtAling}>
              <h5 className={style.tituloFilter}>Tipo de Actividad</h5>
              <input
                placeholder="Ingresa una actividad..."
                list="actividades"
                onChange={(e) => handleOnChangeFiltAct(e)}
                value={filtrado.actividades}
                className={style.dataFilter}
              />
              <datalist id="actividades">
                {actividades.map((act) => (
                  <option key={act.id} value={act.nombre}>
                    {act.nombre}
                  </option>
                ))}
              </datalist>
              <button
                value=""
                onClick={(e) => handleOnChangeFiltAct(e)}
                className={
                  filtrado.actividades === ""
                    ? style.borrarButtonHide
                    : style.borrarButton
                }
              >
                Borrar
              </button>
            </div>

            <div className={style.filtAling}>
              <h5 className={style.tituloFilter}>Ordenar</h5>
              <select
                onChange={(e) => {
                  handleOnChangeOrd(e);
                }}
                value={ordenado}
                className={style.selectedFilter}
              >
                <option value="desac">Elige una opcion</option>
                <option value="Desc-Nombre">a - Z (Nombre)</option>
                <option value="Asc-Nombre">z - A (Nombre)</option>
                <option value="Desc-Poblacion">m - M (Poblacion)</option>
                <option value="Asc-Poblacion">M - m (Poblacion)</option>
              </select>

              <button
                value="desac"
                onClick={(e) => {
                  handleOnChangeOrd(e);
                }}
                className={
                  ordenado === "desac" || ordenado === ""
                    ? style.borrarButtonHide
                    : style.borrarButton
                }
              >
                Borrar
              </button>
            </div>
            <div
              className={
                filtrado.continente === "desac" ||
                filtrado.continente === "all" ||
                filtrado.continente === "" ||
                filtrado.continente === "All"
                  ? ordenado === "desac" || ordenado === ""
                    ? style.borrarButtonHide
                    : filtrado.actividades === "" && style.borrarButtonHide
                  : style.filtAling
              }
              style={{ width: "35.5em" }}
            >
              <button
                onClick={(e) => {
                  limpiaFiltros(e);
                }}
                className={style.eliminarButton}
              >
                Eliminar Filtros
              </button>
            </div>
          </div>

          {/* TARJETAS PAISES */}
          <div className={style.tarjetasPaiCont}>
            {loading ? (
              <p>Cargando...</p>
            ) : paisesActuales.length ? (
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
            ) : (
              <p className={style.textError}>No existen coincidencias</p>
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
              currentPage={currentPage}
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
