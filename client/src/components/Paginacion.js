import React from "react";
import style from './Paginacion.module.css'

function Paginacion({ paisesPerPage, totalPaises, paginar,currentPage }) {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPaises / paisesPerPage); i++) {
    numerosPaginas.push(i);
  }

  return (
      <ul className={style.numberList}>
        {numerosPaginas.map((numero) => {
            return (
                <li key={numero}
                className={currentPage === numero ? style.numberActive : style.number}>
                <a
                  onClick={() => {
                    paginar(numero)
                    console.log(numero)
                  }}
                  //eslint-disable-next-line
                  href={`#a`}
                  className={currentPage === numero ? style.numberTextActive : style.numberText}
                >
                  {numero}
                </a>
              </li>
        )
          
        })}
      </ul>
  );
}

export default Paginacion;
