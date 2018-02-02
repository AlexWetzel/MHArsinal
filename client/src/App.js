import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combo from './pages/Combo';
import Weapons from './pages/Weapons';
import Home from './pages/Home';
import ChargeBlade from './pages/ChargeBlade';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer';



const App = () =>
  <Router>
    <div>
    	<Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weapons" component={Weapons} />
        <Route exact path="/combo" component={Combo} />
        <Route exact path="/chargeblade" component={ChargeBlade} />
        <Route exact path="/about" component={About} />
        <Route exact path="/github" component={() => window.location = 'https://github.com/AlexWetzel/MonsterHunterArms'} />
      </Switch>
      <Footer />
    </div>

  </Router>;

export default App;

