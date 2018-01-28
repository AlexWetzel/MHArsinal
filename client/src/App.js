import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combo from './pages/Combo';
import Weapons from './pages/Weapons';
import Home from './pages/Home';
import Nav from './components/Nav';


const App = () =>
  <Router>
    <div>
    	<Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weapons" component={Weapons} />
        <Route exact path="/combo" component={Combo} />
      </Switch>
    </div>
  </Router>;

export default App;

