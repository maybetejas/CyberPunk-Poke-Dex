// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function PokemonPage() {
//   const { name } = useParams();
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//       });
//   }, [name]);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div style={{ textAlign: "center" }}>
//          <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
//       <h1>{data.name}</h1>
//       <span onClick={() => navigate(-1)}>👈</span>
//     </div>
//   );
// }

// export default PokemonPage;


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './pokemonPage.module.css';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.back} onClick={() => navigate(-1)}>👈</span>
          <h1 className={styles.name}>{data.name}</h1>
          <div></div>
        </div>

        <img className={styles.image} src={data.sprites.other['official-artwork'].front_default} alt={data.name} />

        <div className={styles.types}>
          {data.types.map(t => (
            <span key={t.type.name} className={`${styles.type} ${styles[t.type.name]}`}>{t.type.name}</span>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Abilities</h3>
          {data.abilities.map((a, i) => (
            <p key={i}>{a.ability.name}</p>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Stats</h3>
          {data.stats.map(stat => (
            <div key={stat.stat.name} className={styles.statRow}>
              <span>{stat.stat.name.toUpperCase()}</span>
              <div className={styles.statBar}>
                <div className={styles.statFill} style={{ width: `${stat.base_stat}%` }}></div>
              </div>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Moves</h3>
          <ul>
            {data.moves.slice(0, 4).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Evolution</h3>
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Coming Soon 🔮</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;