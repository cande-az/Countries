import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Henry Countries</h1>

      {/* BOTTON PARA IR A COMPONENTE HOME */}
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

export default Landing;
