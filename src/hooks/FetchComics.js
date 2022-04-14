import api from '../api/api';

import { useEffect, useState } from 'react';
import { mapComicAttributes } from '../api/map-comic-attributes';
import { URL } from '../api/api';

const FetchComics = (id = '') => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`comics${id ? `/${id}` : ''}${URL}`)
      .then((response) => {
        setData(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [id]);

  const newData = mapComicAttributes(data);

  return { newData, loading, error };
};

export default FetchComics;
