import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import tempData from './data/tempData';

render( 
  React.createElement(App, { tasks: tempData }),
  document.getElementById('app')
)