import useFetchPeli from "../hooks/useFetchPeli";

function Home() {

  const peliculas = useFetchPeli("tv", "popular")
  return (

    <div >
    <h1>Series Populares</h1>
    {peliculas?.map(p => (
      <h4 key={p.id}>{p.name}</h4>
    ))}
  

</div>

);
}

export default Home;