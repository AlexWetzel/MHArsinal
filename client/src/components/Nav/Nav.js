import React from 'react';
import "./Nav.css";

const Nav = () =>

  <div  className="navbar-fixed">
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="/weapons">Weapons Overview</a></li>
      <li className="divider"></li>
      <li><a href="/greatsword">Great Sword</a></li>
      <li><a href="/longsword">Long Sword</a></li>
      <li><a href="/swordandshield">Sword & Shield</a></li>
      <li><a href="/dualblades">Dual Blades</a></li>
      <li><a href="/hammer">Hammer</a></li>
      <li><a href="/huntinghorn">Hunting Horn</a></li>
      <li><a href="/lance">Lance</a></li>
      <li><a href="/gunlance">Gunlance</a></li>
      <li><a href="/switchaxe">Switch Axe</a></li>
      <li><a href="/chargeblade">Charge Blade</a></li>
      <li><a href="/insectglaive">Insect Glaive</a></li>
      <li><a href="/lightbowgun">Light Bowgun</a></li>
      <li><a href="/heavybowgun">Heavy Bowgun</a></li>
      <li><a href="/bow">Bow</a></li>
    </ul>
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li><a className="nav-button brand" href="/">MONSTER HUNTER ARMS</a></li>
          <li><a className="nav-button dropdown-button center-align" href="#!" data-activates="dropdown1">Weapons<i className="material-icons right">arrow_drop_down</i></a></li>
          <li><a className="nav-button"href="/combo">Combo Test</a></li>
        </ul>
      </div>
    </nav>
  </div>;

export default Nav;