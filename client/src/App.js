import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    /* PAGINA INICIAL */
    <div className="App">
      <h1>Henry Countries</h1>

      {/* BOTTON PARA IR A COMPONENTE HOME */}
      <Link to="/s/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

export default App;
