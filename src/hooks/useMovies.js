import api from '../api/api.json';
import { useEffect, useState } from 'react';

export const useMovies = ({ query = '' }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query === '') return;

    fetch(`${api.apiWithAccess}&s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, [query]);

  return { movies: movies?.Search };
};
