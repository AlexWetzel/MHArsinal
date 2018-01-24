import ReactTransitionGroup from 'react-addons-transition-group';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
// import 'gsap/TweenLite'
// import 'gsap/CSSPlugin'
// import {TweenLite, CSSPlugin} from "gsap";
import animation from './animation';

class Attack extends Component {

  constructor(props) {
    super(props);
    this.dom = {};
  }

  componentDidMount() {
    this.dom.root = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(cb) {
    animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb) {
    animation.show(this.dom.root, cb);
  }

  render() {
    return (
      <div id={this.props.id} className="card blue-grey darken-1" {...this.props} >
        <div className="card-content white-text">
          <span className="card-title">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Attack;