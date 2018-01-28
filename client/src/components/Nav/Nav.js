import React from 'react';
import "./Nav.css";

const Nav = () =>
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="hide-on-med-and-down">
        <li><a className="brand" href="/">MONSTER HUNTER ARMS</a></li>
        <li><a href="/weapons">Weapons</a></li>
        <li><a href="/combo">Combo Test</a></li>
      </ul>
    </div>
  </nav>;

export default Nav;