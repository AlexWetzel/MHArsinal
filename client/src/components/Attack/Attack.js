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
    animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb) {
    animation.show(this.dom.root, cb);
  }

  render() {
    return (
      <div className="col s12">
        <div id={this.props.id} className="card" {...this.props} >
          <div className="card-content white-text">
            <img className="button-icon" src="https://vignette.wikia.nocookie.net/evangelion/images/e/ec/PS_Circle_Icon.png/revision/latest?cb=20120325215235" />
            <span className="card-title">{this.props.name}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Attack;