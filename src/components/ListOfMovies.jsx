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
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} loading="lazy" />
          </li>
        ))}
      </ul>
    </>
  );
};
