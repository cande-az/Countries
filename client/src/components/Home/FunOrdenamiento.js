
export function ordenAsc(e, paises,paises_filtrados,filtrado,setOrdenado) {
  //falta
  //paises_filtrados,paises,filtrado,setActivo,SetOrdenado
  e.preventDefault();

  if (filtrado) {
    paises_filtrados.sort(function (paisA, paisB) {
      if (paisA.nombre < paisB.nombre) {
        return 1;
      }
      if (paisA.nombre > paisB.nombre) {
        return -1;
      }
      return 0;
    });
    setOrdenado("ordenadoAscF");
  } else {
    paises.sort(function (paisA, paisB) {
      if (paisA.nombre < paisB.nombre) {
        return 1;
      }
      if (paisA.nombre > paisB.nombre) {
        return -1;
      }
      return 0;
    });
    setOrdenado("ordenadoAsc");
  }

  //console.log(paises)
}

export function ordenDes(e,paises,paises_filtrados,filtrado,setOrdenado) {
  e.preventDefault();
  if (filtrado) {
    paises_filtrados.sort(function (paisA, paisB) {
      if (paisA.nombre > paisB.nombre) {
        return 1;
      }
      if (paisA.nombre < paisB.nombre) {
        return -1;
      }
      return 0;
    });
    setOrdenado("ordenadoDesF");
  } else {
    paises.sort(function (paisA, paisB) {
      if (paisA.nombre > paisB.nombre) {
        return 1;
      }
      if (paisA.nombre < paisB.nombre) {
        return -1;
      }
      return 0;
    });
    setOrdenado("ordenadoDes");
  }

  //console.log(ordenado)
  //console.log(paises)
}
