import axios from 'axios';

var getListings = function(url, callback){
  return axios.get(url)
  .then(function(res){
    return callback(res);
  })
  .catch(function(err){
    console.log(err);
  })
};


export default getListings;