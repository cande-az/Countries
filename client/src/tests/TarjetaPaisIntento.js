import React from "react";
import { configure, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TarjetaPais from "../components/TarjetaPais"

configure({ adapter: new Adapter() });

describe("<TarjetaPais />", () => {
  function formatPOB(pob) {
    return new Intl.NumberFormat("de-DE").format(pob);
  }
  let compo;
  let pais = {
    id: "ARG",
    nombre: "Argentina",
    imagen_de_la_bandera: "https://flagcdn.com/ar.svg",
    continente: "Americas",
    poblacion: 45376763,
  };

  beforeEach(() => {
    compo = mount(
      <TarjetaPais
        key={pais.id}
        id={pais.id}
        nombre={pais.nombre}
        continente={pais.continente}
        imgBandera={pais.imagen_de_la_bandera}
        poblacion={pais.poblacion}
      />
    );
  });

  it('deberia renderizar un "div" que contenga el "title" que recibe por props', () => {
    expect(
      wrapper.contains(
        <div>{nombre}</div>
      )
    ).toEqual(true);
  });
});
