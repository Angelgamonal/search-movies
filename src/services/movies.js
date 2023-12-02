import api from '../api/api.json';

export const searchMovies = async ({ search }) => {
  if (search.trim() === '') return;

  try {
    const resp = await fetch(`${api.apiWithAccess}&s=${search}`);

    const json = await resp.json();

    return json.Search?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));
  } catch (error) {
    console.log('Error->', error);
    throw new Error('Error searching movies->');
  }
};
