import ListItem from "./listItem.js";
import styles from "./listicle.module.css";

function Listicle({pokemonList}) {
    return (
        <div className={styles.listicle}>
            {pokemonList.slice(0, 151).map((pokemon, index) => (
                <ListItem  key={pokemon.name} name={pokemon.name} url={pokemon.url}  />
            ))}
        </div>
    );
}

export default Listicle;