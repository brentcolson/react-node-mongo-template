import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from './layouts/App.jsx';

// Containers
import ListContainer from './containers/ListContainer.jsx';

render((

    <Router history={ browserHistory}>

      <Route component={ App }>

        <Route path="/" component={ ListContainer } />

      </Route>

    </Router>

), document.getElementById('app'));



