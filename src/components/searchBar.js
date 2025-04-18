import styles from './searchBar.module.css';
import { useNavigate } from 'react-router-dom';

function SearchBar ({searchTerm, setSearchTerm}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const navigate = useNavigate();

    return (
        <div className={styles.searchBar}>
            <span
                onClick={()=>{navigate('/pokeScanner');}}
            >📷</span>
        <input onChange={(e) => handleChange(e)} type="text" placeholder="Search..." />
        <button type="submit">Search</button>
        </div>
    );
}

export default SearchBar;