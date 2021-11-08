import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifiPaisSelect } from "../actions/index";
import { axiosPaises } from "../actions/index";

function CrearActividad() {
  const paises = useSelector((state) => state.paises);
  const paisesSelectGlob = useSelector((state) => state.paisesSelect);
  const dispatch = useDispatch();

  const [pais, setPais] = React.useState("");
  const [paisesSelect, setPaisesSelect] = React.useState([]);
  const [restart, setRestart] = React.useState(false);
  const [data, setData] = React.useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
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
        console.log(paisesSelect);
      }
      setPais(e.target.value);
      setRestart(true);
      setData(() => {
        return {
          ...data,
          countries: paisesSelect,
        };
      });
    } else{
      setData(() => {
        return {
          ...data,
          [e.target.name]: e.target.value,
        };
      });
    }
  }

  function handleOnChangeNumber(e) {
    e.preventDefault();
    let dificultadN = parseInt(e.target.value);
    console.log(dificultadN);
    setData(() => {
      return {
        ...data,
        dificultad: dificultadN,
      };
    });
  }

  function handleOnClickBorrar(e) {
    e.preventDefault();
    setData({
      nombre: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      countries: [],
    });
    setPaisesSelect([])
    setPais("")
  }

  async function handleOnClickDeletePais(e, indexPais) {
    console.log(indexPais);
    e.preventDefault();
    let saca = paisesSelect.filter((p) => p !== indexPais);
    setPaisesSelect(saca);
    console.log(paisesSelect);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    //await console.log(data);
    //await console.log(JSON.stringify(data));

    await fetch("http://localhost:3004/api/activity",{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Actividad Agregada")
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <section>
          <label>Nombre</label>
          <input
            name="nombre"
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={data.nombre}
          />{" "}
        </section>

        <section>
          <label>Dificultad</label>
          <select
            name="dificultad"
            type="number"
            onChange={(e) => {
              handleOnChangeNumber(e);
            }}
            value={data.dificultad}
          >
            <option value="no">Elige una opcion...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </section>

        <section>
          <label>Duración</label>
          <input
            name="duracion"
            type="datetime-local"
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={data.duracion}
          />{" "}
        </section>

        <section>
          <label>Temporada</label>
          <select
            name="temporada"
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={data.temporada}
          >
            <option>Elige una opcion</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Primavera</option>
            <option>Invierno</option>
          </select>
        </section>

        <section>
          <label>Paises</label>
          <select
            type="text"
            list="desple"
            name="countries"
            onChange={(e) => {
              handleOnChange(e);
            }}
            className="input1"
            value={pais}
          >
            <option>Elige los paises...</option>
            {paises.map((pais) => (
              <option key={pais.id} value={pais.id}>
                {pais.nombre}
              </option>
            ))}
          </select>

          <ul>
            {restart &&
              paisesSelectGlob !== 0 &&
              paises.map(
                (p, index) =>
                  paisesSelect.includes(p.id) && (
                    <div key={p.id}>
                      <p>{p.nombre}</p>
                      <button
                        onClick={(e) => {
                          handleOnClickDeletePais(e, p.id);
                        }}
                      >
                        x
                      </button>
                    </div>
                  )
              )}
          </ul>
        </section>

        <label>Link Img</label>
        <input/>

        <button type="submit">Crear actividad</button>
        <button onClick={handleOnClickBorrar}>Cancelar</button>
      </form>

      <button onClick={handleOnClickBorrar}>Crear otra actividad</button>
    </div>
  );
}

export default CrearActividad;
