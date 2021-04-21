import React from 'react';
import Inicio from './components/inicio';
import Base from './components/base';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio">
          <Inicio />
        </Route>
        <Route path="/">
          <Base />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
