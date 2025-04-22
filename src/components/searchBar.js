import styles from './searchBar.module.css';

function SearchBar ({searchTerm, setSearchTerm}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className={styles.searchBar}>
        <input onChange={(e) => handleChange(e)} type="text" placeholder="Search..." />
    
        </div>
    );
}

export default SearchBar;