import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () =>

  <div  className="navbar-fixed">
    <ul id="dropdown1" className="dropdown-content">
      <li><Link to="/weapons">Weapons Overview</Link></li>
      <li className="divider"></li>
      <li><Link to="/greatsword">Great Sword</Link></li>
      <li><Link to="/longsword">Long Sword</Link></li>
      <li><Link to="/swordandshield">Sword & Shield</Link></li>
      <li><Link to="/dualblades">Dual Blades</Link></li>
      <li><Link to="/hammer">Hammer</Link></li>
      <li><Link to="/huntinghorn">Hunting Horn</Link></li>
      <li><Link to="/lance">Lance</Link></li>
      <li><Link to="/gunlance">Gunlance</Link></li>
      <li><Link to="/switchaxe">Switch Axe</Link></li>
      <li><Link to="/chargeblade">Charge Blade</Link></li>
      <li><Link to="/insectglaive">Insect Glaive</Link></li>
      <li><Link to="/lightbowgun">Light Bowgun</Link></li>
      <li><Link to="/heavybowgun">Heavy Bowgun</Link></li>
      <li><Link to="/bow">Bow</Link></li>
    </ul>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><Link className="nav-button brand" to="/">MONSTER HUNTER ARMS</Link></li>
          <li><a className="nav-button dropdown-button center-align" href="#!" data-activates="dropdown1">Weapons<i className="material-icons right">arrow_drop_down</i></a></li>
          <li><Link className="nav-button"to="/combo">Combo Test</Link></li>
        </ul>
      </div>
    </nav>
  </div>;

export default Nav;