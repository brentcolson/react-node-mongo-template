import axios from 'axios';

export function getItems ( endPoint ){
  return axios.get( window.location.href + 'api/' + endPoint );
}

//expect 'item' to be an object with all properties required by item model
export function addItem ( endPoint, item ){
  return axios.post( window.location.href + 'api/' + endPoint, item );
}

