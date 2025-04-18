import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PokemonPage() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, [name]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
         <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
      <h1>{data.name}</h1>
      <span onClick={() => navigate(-1)}>👈</span>
    </div>
  );
}

export default PokemonPage;
