import axios from 'axios';
import md5 from 'md5';

const publicKey = '8e92d6bef82e82b2e0bf8f9a579e3fa6';
const privateKey = '6967a803a25711cc61093be0b169d8a3f4b31131';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const URL = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/`,
});

export default api;
