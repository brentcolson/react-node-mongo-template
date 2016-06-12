import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import tempData from './data/tempData';
import getListings from './lib/helpers.js';

getListings("http://localhost:8000/api/ideas", 
  function(res){
    render( 
      React.createElement(App, { tasks: res.data }),
      document.getElementById('app')
    );
  }
);