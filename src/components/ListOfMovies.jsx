export const ListOfMovies = ({ movies = [] }) => {
  return (
    <>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(12em, 1fr))',
          gap: '1.5em',
          alignItems: 'start',
          justifyItems: 'center',
          listStyle: 'none',
        }}
      >
        {movies?.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
