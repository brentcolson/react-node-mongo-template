import axios from 'axios';

export function getListings (){
  return axios.get('http://localhost:8000/api/ideas');
}