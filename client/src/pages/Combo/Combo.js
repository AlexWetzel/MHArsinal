import React, { Component } from 'react';
import Attack from "./../../components/Attack";
import axios from "axios";

class Combo extends Component {

	state = {
		movelist: [],
		attack: {},
		options: []
	}

	componentDidMount() {
    // Load articles after the state changes
		this.loadMovelist();
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

      	this.stageMoves();
      })
      .catch(err => console.log(err));
  }

  stageMoves = () => {
  	// Take the array of cancels for the current attack
  	const attack = this.state.attack;
  	// Map them into a new array
  	const options = attack.cancels.map(cancel => {
  		// In the map function, find the index of the moveID, and take the name from that index
 	
 			// const i = this.state.movelist.findIndex(move => move.moveID === cancel.moveID)
 			// console.log(i);

 			const i = parseInt(cancel.moveID.slice(2));
 			console.log(i);
 			const move = this.state.movelist[i];
 			move.input = cancel.input

 			return move;
 		});

 		this.setState({ options: options })
  }

	render() {
		return (
			<div className="container">
				<p>
					Combo Page
				</p>
				<div className="row">
					<div className="col s6">
						<Attack
							key={this.state.attack.moveID}
							name={this.state.attack.name}
						/>
					</div>
					<div className="col s6">
						{this.state.options.map(option => {
							return (
								<Attack
									key={option.moveID}
									name={option.name}
								/>
							);
						})}
					</div>
				</div>
			</div>
		)
	}
}
export default Combo;

						// {this.state.movelist.map(move => {
						// 	return (
						// 		<Attack
						// 			key={move.moveID}
						// 			name={move.name}
						// 		/>
						// 	);
						// })}