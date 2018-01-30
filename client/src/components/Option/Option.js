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
    this.props.onRef(this);
  }

  componentWillUnmount() {
    console.log("component unmounted")
    // this.props.onRef(undefined);
  }

  componentWillEnter(cb) {
    animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb) {
    animation.hide(this.dom.root, cb);
    // animation.moveLeft(this.dom.root, cb);
  }

  nextAttack(cb) {
    console.log("Next attack selected");
    // animation.moveLeft(this.dom.root);
  }

  render() {
    return (
      <div className="col s12">
        <div id={this.props.id} className={"card option " + "o" + this.props.index} {...this.props}>
          <div className="card-content white-text">
            <img className="button-icon" src="https://vignette.wikia.nocookie.net/evangelion/images/e/ec/PS_Circle_Icon.png/revision/latest?cb=20120325215235" />
            <span className="card-title">{this.props.name}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Option;