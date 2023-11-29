import { ListOfMovies } from './components/ListOfMovies';
import moviesResult from './mocks/with-result.json';
import './App.css';

function App() {
  const movies = moviesResult.Search;

  return (
    <div className="page">
      <header>
        <h1>Search Movies</h1>
        <form>
          <input type="text" placeholder="Search your movies" />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>{movies.length > 0 ? <ListOfMovies movies={movies} /> : <span>No found movie</span>}</main>
    </div>
  );
}

export default App;
