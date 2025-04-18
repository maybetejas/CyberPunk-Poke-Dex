import { useEffect, useState } from 'react';
import './global.css';
import SearchBar from './components/searchBar.js';
import Listicle from './components/listicle.js';
import PokemonPage from './components/pokemonPage.js';
import PokeScanner from './components/pokeScanner.js';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    // Fetching all Pokemon data from the API
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1300')
      .then((res) => res.json())
      .then((data) => {
        const pokeInfo = data.results.map(pokemon => ({
          name: pokemon.name,
          url: pokemon.url
        }));
        setAllPokemon(pokeInfo);
        setFilteredPokemon(pokeInfo);
      });
  }, []);

  useEffect(() => {
    // Filtering the Pokemon list based on the search term
    if (searchTerm === '') {
      setFilteredPokemon(allPokemon);
    } else {
      const filtered = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  }, [searchTerm, allPokemon]);


  return (

    //routes
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Listicle pokemonList={filteredPokemon} />
            </>
          }
        />

        <Route path="/pokemon/:name" element={<PokemonPage />} />
        <Route path="/pokeScanner" element={<PokeScanner />} />
      </Routes>
    </main>

  );
}

export default App;
