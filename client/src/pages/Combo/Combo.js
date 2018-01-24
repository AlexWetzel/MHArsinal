import ReactTransitionGroup from 'react-addons-transition-group';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
// import 'gsap/TweenLite'
// import 'gsap/CSSPlugin'
// import {TweenLite, CSSPlugin} from "gsap";
// import animation from './animation';
import Attack from "./../../components/Attack";

class Combo extends Component {

	state = {
		movelist: [],
		attack: {},
		options: []
	}

	componentDidMount() {
    // Load articles after the state changes
		this.loadMovelist();
		// this.dom.root = ReactDOM.findDOMNode(this);
  }

	loadMovelist = () => {
    // Get saved articles from the database
  	axios.get("/api/weapon")
      .then(res => {
      	// console.log(res.data)
      	const box = res.data
      	this.setState({ movelist: box })
      	console.log(this.state.movelist)
      	console.log(this.state.movelist[0].name)
      	this.setState({ attack: this.state.movelist[0] })

      	this.stageMoves(this.state.movelist[0]);
      })
      .catch(err => console.log(err));
  }

  stageMoves = attack => {
  	// Take the array of cancels for the current attack
  	// Map them into a new array
  	const options = attack.cancels.map(cancel => {
  		// In the map function, find the index of the moveID, and take the name from that index
 	
 			// const i = this.state.movelist.findIndex(move => move.moveID === cancel.moveID)
 			// console.log(i);

 			const i = parseInt(cancel.moveID.slice(2));
 			const move = this.state.movelist[i];
 			move.input = cancel.input

 			return move;
 		});

 		this.setState({ options: options })
  }
  // Do combo
  doCombo = option => {

  	// var test = document.getElementById("title");
  	// console.log(test)
    // TweenLite.to(test, 1, {left:"632px"});

  	const nextMove = option;
  	this.setState({ attack: nextMove })
  	this.stageMoves(option);
  }

	render() {
		return (
			<div className="container">

				<p id="title">
					Combo Page
				</p>

				<div className="row">
					<div className="col s6">
						
						<Attack
							id={this.state.attack.moveID}
							key={this.state.attack.moveID}
							name={this.state.attack.name}
						/>

					</div>

					<div className="col s6">
					<ReactTransitionGroup>
						{this.state.options.map(option => {
							return (
								<Attack
									id={option.moveID}
									key={option.moveID}
									name={option.name}
									onClick={() => this.doCombo(option)}
								/>
							);
						})}
						</ReactTransitionGroup>
					</div>

				</div>


			</div>
		)
	}
}
export default Combo;