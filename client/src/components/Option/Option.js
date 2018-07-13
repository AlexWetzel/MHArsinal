import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import animation from './animation';
import './option.css';


class Option extends Component {

  constructor(props) {
    super(props);
    this.dom = {};
  }

  componentDidMount() {

    this.dom.root = ReactDOM.findDOMNode(this);
    console.log("component mounted")
  }

  componentWillUnmount() {
    console.log("component unmounted")
    // this.props.onRef(undefined);
  }

  componentWillEnter(cb) {
    animation.enterRight(this.dom.root, cb);
    // animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb) {
    animation.hide(this.dom.root, cb);
    // animation.moveLeft(this.dom.root, cb);
  }

  render() {
    return (      
        <div id={this.props.id} className={"card option o" + this.props.index} {...this.props}>
          <div className={"card-content white-text " + this.props.input}>
            <div className="first-icon"></div>
            <div className="secondary-icon">
              <p>+</p>
              <div className="second-icon"></div>
            </div>
            <span className="card-title">{this.props.name}</span>
          </div>
        </div>     
    )
  }
}

export default Option;