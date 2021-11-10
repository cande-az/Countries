import React from "react";
import { fetchFilterName } from "../actions/index";
import { useDispatch} from "react-redux";
import style from "./SearchBar.module.css"

import iconSearch from "../img/svg/icono-search.svg"

function SearchBar({setCurrentPage,limpiaFiltros}) {
  const dispatch = useDispatch();

  function HandleOnChange(e) {
    limpiaFiltros()
    dispatch(fetchFilterName(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className={style.searchContainer}>
      <form>
        <input
          onChange={(e) => {
            HandleOnChange(e);
          }}
          className={style.searchInput}
          placeholder="Escribe el nombre de un pais..."
        ></input>
      </form>
      <img src={iconSearch} className={style.searchIcon}
      alt="Busqueda Icono"/>
    </div>
  );
}

export default SearchBar;
