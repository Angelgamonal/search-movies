import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { ListOfMovies } from './components/ListOfMovies';
import './App.css';

function App() {
  const [sort, setSort] = useState(false);
  const { error, search, setSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length < 3) return;
    getMovies({ search });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return;
    setSearch(newQuery);

    debounceGetMovies(newQuery);
  };

  const handleCheckBox = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Search Movies</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your movies"
            name="search"
            onChange={handleChange}
            value={search}
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <button
            type="submit"
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            disabled={loading}
          >
            {loading ? 'Cargando' : 'Buscar'}
          </button>
          <label htmlFor="checkbox">
            Ordernar A-Z <input type="checkbox" onChange={handleCheckBox} value={sort} id="checkbox" />
          </label>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{movies?.length > 0 ? <ListOfMovies movies={movies} /> : <span>No found movie</span>}</main>
    </div>
  );
}

export default App;
