import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setBusqueda } from "../actions/index";

function Header({ setBusqueda }) {
  function HandleOnChange(e) {
    setBusqueda(e.target.value)
  }

  return (
    <>
      <Link to="/s/home">
        <h1>Countries</h1>
      </Link>

      <div>
        <h3>buscar</h3>
        <input
          onChange={(e) => {
            HandleOnChange(e);
          }}
        ></input>
        <button>buscar</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    paises: state.paises,
    filtro: state.filterAD,
    oriPaises: state.oriPaises,
  };
};

export default connect(mapStateToProps, { setBusqueda })(Header);
