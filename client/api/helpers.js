import axios from 'axios';

var getListings = function(){
  return axios.get('http://localhost:8000/api/ideas');
};


export default getListings;