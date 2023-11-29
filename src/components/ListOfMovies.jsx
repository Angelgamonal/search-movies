export const ListOfMovies = ({ movies = [] }) => {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
