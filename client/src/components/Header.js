import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/s/home">
        <h1>Countries</h1>
      </Link>
    </div>
  );
}

export default Header;
