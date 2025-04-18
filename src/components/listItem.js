import { useState, useEffect } from "react";
import styles from "./listItem.module.css";
import { useNavigate } from "react-router-dom";

function ListItem({ name, url }) {

    const [sprite, setSprite] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const img = data.sprites.other['official-artwork'].front_default;
                setSprite(img);
            });
    }, [url]);

    return (
        <div onClick={()=>{ navigate(`/pokemon/${name}`)}} className={styles.ListItem}>
            <h3>{name}</h3>
            <span>      {sprite ? (
                <img src={sprite} alt={name} style={{width: '40px'}} />
            ) : (
                <p>⏳</p>
            )}</span>
        </div>
    );

}

export default ListItem;