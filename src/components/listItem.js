import { useState, useEffect } from "react";
import styles from "./listItem.module.css";
import { useNavigate } from "react-router-dom";

function ListItem({ name, url }) {
  const [sprite, setSprite] = useState('');
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const img = data.sprites.other['official-artwork'].front_default;
        const typeList = data.types.map(t => t.type.name);
        setSprite(img);
        setTypes(typeList);
      });
  }, [url]);

  return (
    <div onClick={() => navigate(`/pokemon/${name}`)} className={styles.ListItem}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <div className={styles.types}>
          {types.map((type) => (
            <span key={type} className={`${styles.type} ${styles[type]}`}>{type}</span>
          ))}
        </div>
      </div>
      <div className={styles.image}>
        {sprite ? (
          <img src={sprite} alt={name} />
        ) : (
          <p>⏳</p>
        )}
      </div>
    </div>
  );
}

export default ListItem;
