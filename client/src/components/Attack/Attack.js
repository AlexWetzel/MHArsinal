import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import animation from './animation';
import './Attack.css';


class Attack extends Component {

  constructor(props) {
    super(props);
    this.dom = {};
  }

  componentDidMount() {
    this.dom.root = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(cb) {
    // console.log("option", this.props.select, "selected")
    animation.enterRight(this.dom.root, cb, this.props.select);
    // animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb) {
    // animation.hide(this.dom.root, cb);
    animation.leaveLeft(this.dom.root, cb);
  }

  render() {
    return (
      <div id={this.props.id} className="attack card" {...this.props} >
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
          </div>
      </div>
    )
  }
}

export default Attack;