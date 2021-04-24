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
      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>
      <Switch>

        {/* Forma 1 de utilizar route */}
        <Route exact path="/inicio/:nombre">
          <Inicio />
        </Route>
        
        {/* forma 2 y mas corta de usar route */}
        <Route exact path="/" component={Base}/>
      </Switch>
    </Router>
  );
}

export default App;
