import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/s/home">
        <h1>Countries</h1>
      </Link>

      <div>
        <h3>buscar</h3>
        <input></input>
        <button>buscar</button>
      </div>
    </>
  );
}

export default Header;
