import ReactTransitionGroup from 'react-addons-transition-group';
import React, { Component } from 'react';
import axios from "axios";
import Attack from "./../../components/Attack";
import InfoPanel from "./../../components/InfoPanel";
// import gamepad from "./../../utils/gamepad.js";
import './Combo.css'



class Combo extends Component {

	state = {
		movelist: [],
		attack: {},
		options: []
	}


	componentDidMount() {
    // Load articles after the state changes
		this.loadMovelist();

		// this.gamepadListener();
		// this.checkGamepad();
		this.gamepad();

		// window.addEventListener("gamepadconnected", gamepadAPI.connect);
		// window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
  }
  // COntroller inputs ==============================================================================
  gamepad = () => {
  	var start;
  	var interval;
  	var valid;

  // 	window.addEventListener("gamepadconnected", function(e) {
		//   var gp = navigator.getGamepads()[e.gamepad.index];
		//   let gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
		//   console.log(gamepadInfo);

		//   gameLoop();
		// });

		window.addEventListener("gamepaddisconnected", function(e) {
		  let gamepadInfo = "Waiting for gamepad.";
		  console.log(gamepadInfo);

		  // cancelRequestAnimationFrame(start);
		});



		if (!('ongamepadconnected' in window)) {
		  // No gamepad events available, poll instead.
		  console.log("Checking for gamepads");
		  interval = setInterval(pollGamepads, 500);
		}

		function validGamepad(i) {

			var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

		  var gp = gamepads[i];
		  // console.log(gp);
    	if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
    		console.log("Valid gamepad detected");
    		valid = i;
    		gameLoop();
    	}

		  console.log("Gamepad invalid");
		  return false
		}

		function pollGamepads() {
		  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		  for (var i = 0; i < gamepads.length; i++) {
		    var gp = gamepads[i];
		    if (gp) {
		      let gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
		        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

		      console.log(gamepadInfo);
			  	validGamepad(i);
			  	clearInterval(interval);
				  
		    }
		  }


		}

		function buttonPressed(b) {
		  if (typeof(b) == "object") {
		    return b.pressed;
		  }
		  return b == 1.0;
		}

		function gameLoop() {
		  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		  //if can't find gamepads without Unknown Gamepad
		  if (!gamepads[valid]) {
		  	console.log("game loop stopped.");
		    return;
		  }
	  

		  var gp = gamepads[valid];
		  if (buttonPressed(gp.buttons[0])) {
		    console.log("Button 0 pressed");
		  } else if (buttonPressed(gp.buttons[2])) {
		    console.log("Button 2 pressed");
		  }
		  if (buttonPressed(gp.buttons[1])) {
		    console.log("Button 3 pressed");
		  } else if (buttonPressed(gp.buttons[3])) {
		    console.log("Button 4 pressed");
		  }

		  start = requestAnimationFrame(gameLoop);
		}

  }
 //  gamepadListener = () => {

	// 	window.addEventListener("gamepadconnected", function(e) {
	// 	  var gp = navigator.getGamepads()[e.gamepad.index];
	// 	  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

	// 	  // gameLoop();
	// 	});

	// 	window.addEventListener("gamepaddisconnected", function(e) {
	// 	  gamepadInfo.innerHTML = "Waiting for gamepad.";

	// 	  // cancelRequestAnimationFrame(start);
	// 	});

	// }

	// // checkGamepad = () => {
	// // 	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	// //   for (var i = 0; i < gamepads.length; i++) {
	// //     var gp = gamepads[i];
	// //     if (gp) {
	// //       let gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
	// //         ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
	// //       console.log(gamepadInfo);

	// // 			if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
	// // 		  	console.log("Valid pad detected");
	// // 		  	this.gameLoop(gp.index);
	// // 		    clearInterval(interval);

	// // 		  }

	// //     }
	// //   }

	// // }

	// buttonPressed = b => {
	//   if (typeof(b) == "object") {
	//     return b.pressed;
	//   }
	//   return b == 1.0;
	// }

	// gameLoop = i => {
	//   var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//   if (!gamepads) {
	//     return;
	//   }

	//   // console.log(i);

	//   var gp = gamepads[i];
	//   if (this.buttonPressed(gp.buttons[0])) {
	//     console.log("Button 0 pressed");
	//   } else if (this.buttonPressed(gp.buttons[2])) {
	//     console.log("Button 2 pressed");
	//   }
	//   if (this.buttonPressed(gp.buttons[1])) {
	//     console.log("Button 3 pressed");
	//   } else if (this.buttonPressed(gp.buttons[3])) {
	//     console.log("Button 4 pressed");
	//   }

	//   start = requestAnimationFrame(this.gameLoop(i));
	// }



	//==================================================================================================

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
  	const nextMove = option;
  	this.setState({ attack: nextMove })
  	this.stageMoves(option);
  }

	render() {
		return (
			<div>
					<div className="shade" />
				<div className="container">

					

					<div className="row combo">
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

				<InfoPanel
					key={this.state.attack.name}
					name={this.state.attack.name}
					description={this.state.attack.description}
				/>




			</div>
		)
	}
}
export default Combo;