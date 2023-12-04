import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies';

export const useMovies = ({ search = '', sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search.trim().length < 3) return;
    if (previousSearch.current === search) return;

    setLoading(true);
    previousSearch.current = search;
    const respMovies = await searchMovies({ search });
    setMovies(respMovies);

    setLoading(false);
  }, []);

  const sortedMovies = useMemo(() => {
    const sortMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
    return sortMovies;
  }, [sort, movies]);

  return { movies: sortedMovies, loading, getMovies };
};
