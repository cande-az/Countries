import React from "react";
import { fetchFilterName } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function SearchBar({setCurrentPage}) {
  const dispatch = useDispatch();

  function HandleOnChange(e) {
    dispatch(fetchFilterName(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div>
      <h3>buscar</h3>
      <form>
        <input
          onChange={(e) => {
            HandleOnChange(e);
          }}
        ></input>
      </form>
      {/* <button>buscar</button> */}
    </div>
  );
}

export default SearchBar;
