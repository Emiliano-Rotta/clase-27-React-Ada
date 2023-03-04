import useFetchPeli from "../hooks/useFetchPeli";

function Ultimos() {

  const peliculas = useFetchPeli("movie", "upcoming")

  return (

      <div >
          <h1>Ultimos</h1>
          {peliculas?.map(p => (
            <h4 key={p.id}>{p.title}</h4>
          ))}
        

      </div>

  );
}

export default Ultimos;