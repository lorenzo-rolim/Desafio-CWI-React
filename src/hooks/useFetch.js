import axios from 'axios';
import md5 from 'md5';
import { useEffect, useState } from 'react';

const publicKey = '8e92d6bef82e82b2e0bf8f9a579e3fa6';
const privateKey = '6967a803a25711cc61093be0b169d8a3f4b31131';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comddics?ts=${time}&apikey=${publicKey}&hash=${hash}`,
      )
      .then((response) => {
        setData(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
