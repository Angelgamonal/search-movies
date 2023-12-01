import { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import { ListOfMovies } from './components/ListOfMovies';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const { movies } = useMovies({ query });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new window.FormData(e.target));

    if (formData.query.trim() === '') return alert('no hay texto');

    setQuery(formData.query);
  };

  return (
    <div className="page">
      <header>
        <h1>Search Movies</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search your movies" name="query" />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>{movies?.length > 0 ? <ListOfMovies movies={movies} /> : <span>No found movie</span>}</main>
    </div>
  );
}

export default App;
