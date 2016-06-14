import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from './layouts/App.jsx';

// Components
import ListContainer from './containers/ListContainer.jsx';

import tempData from './data/tempData';
import { getListings } from './lib/helpers.js';

ReactDOM.render((

    <Router history={ browserHistory}>

      <Route component={ App }>

        <Route path="/" component={ ListContainer } />

      </Route>

    </Router>

), document.getElementById('app'));



