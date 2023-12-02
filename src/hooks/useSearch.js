import { useEffect, useState, useRef } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search.trim() === '') return setError('No se puede buscar una pelicula vacia');

    if (search.match(/^\d+$/)) return setError('no se puede buscar peliculas con numeros');

    if (search.length < 3) return setError('La busqueda debe tener al menos 3 caracteres');

    setError(null);
  }, [search]);

  return {
    error,
    setSearch,
    search,
  };
};
