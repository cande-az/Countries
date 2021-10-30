import React from "react";

function Paginacion({ paisesPerPage, totalPaises, paginar }) {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPaises / paisesPerPage); i++) {
    numerosPaginas.push(i);
  }

  return (
    <div>
      <ul>
        {numerosPaginas.map((numero) => {
            return (
                <li key={numero}>
                <a
                  onClick={() => {
                    paginar(numero)
                    console.log(numero)
                  }}
                  href={`#${numero}`}
                >
                  {numero}
                </a>
              </li>
        )
          
        })}
      </ul>
    </div>
  );
}

export default Paginacion;
