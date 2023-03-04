import { useState, useEffect } from "react";

function useFetchPeli(tipo, categoria) {
  const[peliculas, setPeliculas] = useState([])

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  },[])

  return peliculas
}

export default useFetchPeli;