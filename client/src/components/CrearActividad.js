import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifiPaisSelect } from "../actions/index";
import { axiosPaises } from "../actions/index";
import style from "./CrearActividad.module.css";
import { Link } from "react-router-dom";

function validate(dato) {
  let errores = {};
  if (!dato.nombre) {
    errores.nombre = "Se requiere un Nombre";
  }
  if (!dato.dificultad || typeof dato.dificultad !== "number") {
    errores.dificultad = "Dificultad es requerido y debe ser un numero";
  }
  if (!dato.imagen_identificatoria) {
    errores.imagenVacio =
      "Si se deja este campo vacio se asignara un imagen por defecto";
  } else if (
    !/^(ftp|http|https):\/\/[^ "]+$/.test(dato.imagen_identificatoria)
  ) {
    errores.imagen = "Si se brinda este campo debe ser un url valido";
  }
  if (!dato.duracion) {
    errores.duracion = "Fecha es un dato requerido";
  }
  if (!dato.temporada) {
    errores.duracion = "Fecha es un dato requerido";
  }
  if (dato.countries.length <= 0) {
    errores.paises = "Debe elegir al menos un pais";
  }
  console.log(errores);
  return errores;
}

function CrearActividad() {
  document.title = "Crear Actividad";
  const paises = useSelector((state) => state.paises);
  const paisesSelectGlob = useSelector((state) => state.paisesSelect);
  const dispatch = useDispatch();

  const [pais, setPais] = React.useState("");
  const [paisesSelect, setPaisesSelect] = React.useState([]);
  const [restart, setRestart] = React.useState(false);
  const [creado, setCreado] = React.useState(false);
  const [errores, setErrores] = React.useState({});
  const [data, setData] = React.useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
    imagen_identificatoria: "",
  });

  React.useEffect(() => {
    dispatch(axiosPaises());
  }, [dispatch]);

  function handleOnChange(e) {
    e.preventDefault();
    if (e.target.name === "countries") {
      setRestart(false);
      if (paisesSelect.includes(e.target.value) === false) {
        paisesSelect.push(e.target.value);
        dispatch(modifiPaisSelect(paisesSelect));
      }
      //setPais(e.target.value);
      setRestart(true);
      setData(() => {
        return {
          ...data,
          countries: paisesSelect,
        };
      });
      setErrores(
        validate({
          ...data,
          countries: paisesSelect,
        })
      );
    } else {
      setData(() => {
        return {
          ...data,
          [e.target.name]: e.target.value,
        };
      });
      if(e.target.name === "duracion"){
        var fecha = e.target.value
        setErrores(
          validate({
            ...data,
            duracion: fecha
          })
        );
      } else{
        setErrores(
          validate({
            ...data,
            [e.target.name]: e.target.value,
          })
        );
      }
      console.log(fecha)
      console.log(errores)
      console.log(data.duracion)
    }
  }

  function handleOnChangeNumber(e) {
    e.preventDefault();
    if (e.target.value.length) {
      let dificultadN = parseInt(e.target.value);
      console.log(dificultadN);
      setData(() => {
        return {
          ...data,
          dificultad: dificultadN,
        };
      });
      setErrores(
        validate({
          ...data,
          [e.target.name]: dificultadN,
        })
      );
    } else {
      setData(() => {
        return {
          ...data,
          dificultad: e.target.value,
        };
      });
      setErrores(
        validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  function handleOnClickBorrar(e) {
    e.preventDefault();
    setData({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      countries: [],
      imagen_identificatoria: "",
    });
    setErrores({});
    setPaisesSelect([]);
    setPais("");
    setCreado(false);
  }

  async function handleOnClickDeletePais(e, indexPais) {
    console.log(indexPais);
    e.preventDefault();
    let saca = paisesSelect.filter((p) => p !== indexPais);
    setPaisesSelect(saca);
    if (!saca.length) {
      setErrores(
        validate({
          ...data,
          countries: [],
        })
      );
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    console.log("hola");
    console.log(data);
    (await !data.imagen_identificatoria) && delete data.imagen_identificatoria;

    await fetch("http://localhost:3004/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Actividad Agregada");
      setCreado(true);
    });
    (await !data.imagen_identificatoria) &&
      setData({ ...data, imagen_identificatoria: "" });
  }

  return (
    <div className={style.bodyGen}>
      {/* PANEL IZQUIERDA */}
      <div className={style.panelIzq}>
        <div>
          {creado ? (
            <div className={style.creado}>
              <Link to="/home">
                <button
                  className={style.submitButton}
                  style={{ textTransform: "none", marginBottom: "0.8em" }}
                >
                  Ir a home
                </button>
              </Link>
              <button
                onClick={(e) => {
                  handleOnClickBorrar(e);
                }}
                className={style.cancel}
                style={{
                  fontWeight: "400",
                }}
              >
                Crear otra actividad
              </button>
            </div>
          ) : (
            <div>
              <div className={style.headerForm}>
                <Link to="/home">
                  <div className={style.backButton}></div>
                </Link>
                <h2 className={style.titulo}>Crear Actividad</h2>
                <div className={style.buttonResetCont}>
                  <a
                    onClick={(e) => {
                      handleOnClickBorrar(e);
                    }}
                    href="click"
                  >
                    reset
                  </a>
                </div>
              </div>

              <form
                onSubmit={
                  Object.keys(errores).length === 1 || !errores
                    ? (e) => {
                        handleOnSubmit(e);
                      }
                    : (e) => {
                        e.preventDefault();
                        console.log("holis");
                      }
                }
              >
                <section className={style.sectionSet}>
                  <div className={style.cabeceraLabel}>
                    <label className={style.labels}>Nombre * </label>
                    <p>{errores.nombre ? errores.nombre : ""}</p>
                  </div>
                  <input
                    name="nombre"
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    value={data.nombre}
                    className={
                      errores.nombre ? style.inputDanger : style.inputBox
                    }
                    placeholder="Escribe un nombre..."
                  />
                </section>

                <section className={style.sectionSet}>
                  <div className={style.cabeceraLabel}>
                    <label className={style.labels}>Dificultad *</label>
                    <p>{errores.dificultad ? errores.dificultad : ""}</p>
                  </div>
                  <select
                    name="dificultad"
                    type="number"
                    onChange={(e) => {
                      handleOnChangeNumber(e);
                    }}
                    value={data.dificultad}
                    className={
                      errores.dificultad
                        ? style.selectedBoxDanger
                        : style.selectBox
                    }
                  >
                    <option value="">Elige una opcion...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </section>

                <section className={style.sectionSet}>
                  <label className={style.labels}>Fecha *</label>
                  <input
                    name="duracion"
                    type="datetime-local"
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    className={
                      errores.duracion ? style.inputDanger : style.inputBox
                    }
                    value={data.duracion}
                    style={{ width: "25.2555vw" }}
                  />{" "}
                </section>

                <section className={style.sectionSet}>
                  <label className={style.labels}>Temporada *</label>
                  <select
                    name="temporada"
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    value={data.temporada}
                    className={style.selectBox}
                  >
                    <option value="">Elige una opcion</option>
                    <option>Verano</option>
                    <option>Otoño</option>
                    <option>Primavera</option>
                    <option>Invierno</option>
                  </select>
                </section>

                <section className={style.sectionSet}>
                  <label className={style.labels}>Paises *</label>
                  <select
                    type="text"
                    list="desple"
                    name="countries"
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    className="input1"
                    value={pais}
                    //eslint-disable-next-line
                    className={style.selectBox}
                  >
                    <option>Elige los paises...</option>
                    {paises
                      .sort(function (paisA, paisB) {
                        if (paisA.nombre > paisB.nombre) {
                          return 1;
                        }
                        if (paisA.nombre < paisB.nombre) {
                          return -1;
                        }
                        return 0;
                      })
                      .map((pais) => (
                        <option key={pais.id} value={pais.id}>
                          {pais.nombre}
                        </option>
                      ))}
                  </select>
                </section>

                <section className={style.sectionSet}>
                  <label className={style.labels}>Link Imagen</label>
                  <input
                    name="imagen_identificatoria"
                    value={data.imagen_identificatoria}
                    className={style.inputBox}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    placeholder="Pega un link..."
                  />
                </section>

                <div className={style.contenedorBoton}>
                  <button
                    className={
                      Object.keys(errores).length === 1 || !errores
                        ? style.submitButton
                        : style.submitButtonGrey
                    }
                    type="submit"
                  >
                    Crear actividad
                  </button>
                  <Link to="/home">
                    <button className={style.cancel}>Cancelar</button>
                  </Link>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* PANEL DERECHA */}
      <div className={style.panelDerecha}>
        <h4 className={style.titulosD}>Preview</h4>
        <div className={style.contenedorTarjeta}>
          <section className={style.tarjetaAct} key={data.id}>
            <img
              src={
                data.imagen_identificatoria
                  ? data.imagen_identificatoria.length !== 0
                    ? data.imagen_identificatoria
                    : "https://www.pinionegypt.com/thumb/resize,1800x1800,no_img.jpg"
                  : "https://www.pinionegypt.com/thumb/resize,1800x1800,no_img.jpg"
              }
              alt={`Imagen de ${data.nombre}`}
              className={style.imagen}
            />
            <div className={style.tag}>
              <h5 className={style.actividad}>
                {data.nombre.length !== 0 ? data.nombre : "Nombre Actividad"}
              </h5>

              <div className={style.tags}>
                <p className={style.difi}>
                  {data.dificultad.length !== 0
                    ? `Dificultad: ${data.dificultad}`
                    : "Elige Dificultad"}
                </p>
                <p className={style.temp}>
                  {data.temporada.length !== 0
                    ? data.temporada
                    : "Elige Temporada"}
                </p>
              </div>
            </div>
          </section>
        </div>
        <section>
          <h4 className={style.titulosD}>Paises</h4>
          <div className={style.paises}>
            {paisesSelect.length > 0 ? (
              restart &&
              paisesSelectGlob !== 0 &&
              paises.map(
                (p) =>
                  paisesSelect.includes(p.id) && (
                    <div key={p.id} className={style.pasaporte}>
                      <p className={style.passport}>passport</p>

                      <img
                        src={p.imagen_de_la_bandera}
                        className={style.bandera}
                        alt={`Bandera de ${p.nombre}`}
                      />
                      <a
                        onClick={(e) => {
                          handleOnClickDeletePais(e, p.id);
                        }}
                        className={style.cross}
                        href="click"
                      >
                        x
                      </a>
                      <div className={style.cajaNombre}>
                        <h6 className={style.nombrePais}>{p.nombre}</h6>
                      </div>
                    </div>
                  )
              )
            ) : (
              <h6 className={style.noHay}>No hay paises seleccionados</h6>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CrearActividad;
