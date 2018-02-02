import ReactTransitionGroup from 'react-addons-transition-group';
import React, { Component } from 'react';
import axios from "axios";
import Attack from "./../../components/Attack";
import Option from "./../../components/Option";
import InfoPanel from "./../../components/InfoPanel";
import gamepad from "./../../utils/gamepad.js";
import './Combo.css'



class Combo extends Component {

	constructor() {
		super();

		this.start;
		this.interval;
		this.valid;
		this.sensitivity = 10;

		//Each used button combination gets a counter
		this.circle = 0;
		this.circleTriangle = 0;
		this.circleRTwo = 0;
		this.triangle = 0;
		this.triangleRTwo = 0;
		this.rTwo = 0;
	}

	state = {
		movelist: [],
		attack: {},
		options: [],
		select: "1"
	}


	componentDidMount() {
    // Load articles after the state changes

    this.valid = 0;
    console.log(this.valid);

		this.loadMovelist();
		this.gamepadListener();




		// window.addEventListener("gamepadconnected", gamepadAPI.connect);
		// window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
  }

  // connectHandler(gamepadIndex) {
  //   console.log(`Gamepad ${gamepadIndex} connected !`)
  // }

  // disconnectHandler(gamepadIndex) {
  //   console.log(`Gamepad ${gamepadIndex} disconnected !`)
  // }

  //  buttonChangeHandler(buttonName, down) {
  //   console.log(buttonName, down)
  // }
  // COntroller inputs ==============================================================================
	buttonPressed = b => {
	  if (typeof(b) == "object") {
	    return b.pressed;
	  }
	  return b == 1.0;
	}

  gameLoop = () => {
	  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	  //if can't find gamepads without Unknown Gamepad
	  if (!gamepads[this.valid]) {
	  	console.log("game loop stopped.");
	    return;
	  }
  

	  const gp = gamepads[this.valid];


	  // const = input;
	  if(gp.axes[1] < -0.9 && this.buttonPressed(gp.buttons[3])) {
	  	console.log("triangle fwd");
	  	this.findInput("fwd-plus-triangle");
	  }

	  else if (this.buttonPressed(gp.buttons[1]) && (gp.axes[0] < -0.9 || gp.axes[0] > 0.9 || gp.axes[1] < -0.9 || gp.axes[1] > 0.9)) {
	  	console.log("dir. circle");
	  	this.findInput("dir-plus-circle");
	  }
	
	  else if (this.buttonPressed(gp.buttons[1])) {
	  	//circle
	    // console.log("Circle pressed!");
	    if (this.buttonPressed(gp.buttons[3])) {
	    	this.circleTriangle ++;

	    	if (this.circleTriangle === this.sensitivity) {
	    		console.log("circle triangle");

	    		this.findInput("triangle-plus-circle");
	    	}

	    } else if (this.buttonPressed(gp.buttons[7])) {
	    	this.circleRTwo ++;

	    	if (this.circleRTwo === this.sensitivity) {
	    		console.log("circle R2");

	    		this.findInput("R2-plus-circle");
	    	}
	    } else {
	    	this.circle ++;

	    	if (this.circle === this.sensitivity) {
	    		console.log("circle");

	    		this.findInput("circle");
	    	}
	    }
	  }
	  
	  else if (this.buttonPressed(gp.buttons[3])) {
	  	//triangle
	    console.log("Triangle pressed!");
	    if (this.buttonPressed(gp.buttons[7])) {
	    	this.triangleRTwo ++;

	    	if (this.triangleRTwo === this.sensitivity) {
	    		console.log("R2 + triangle");
	    		this.findInput("R2-plus-triangle");
	    	}
	    }	else {
	    	this.triangle ++;
	    	if (this.triangle === this.sensitivity) {
	    		console.log("triangle");
	    		this.findInput("triangle");
	    	}
	    }
	    	    // this.findInput();
	  }
	  else if (this.buttonPressed(gp.buttons[7])) {
	    // console.log("R2");
	    this.rTwo ++;
    	if (this.rTwo === this.sensitivity) {
    		console.log("triangle");
    		this.findInput("R2");
    	}
	  }


	 
	  // console.log("loop again");
	  this.start = requestAnimationFrame(this.gameLoop);
	}

	validGamepad = i => {

		const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

	  const gp = gamepads[i];
	  // console.log(gp);
  	if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
  		console.log("Valid gamepad detected");
  		this.valid = i;
  		this.gameLoop();
  	}

	  console.log("Gamepad invalid");
	  return false;
	}
	pollGamepads = () => {

		console.log("pollGamepads called")
	  const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	  for (let i = 0; i < gamepads.length; i++) {
	    const gp = gamepads[i];
	    if (gp) {
	      const gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
	        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

	      console.log(gamepadInfo);
		  	this.validGamepad(i);
		  	clearInterval(this.interval);
			  
	    }
	  }
	}

  gamepadListener = () => {
  	// var start;
  	// var interval;
  	// var valid;

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
		  this.interval = setInterval(this.pollGamepads, 500);
		  // this.interval = setInterval(console.log(this.message), 500);
		}

		// function validGamepad(i) {

		// 	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

		//   var gp = gamepads[i];
		//   // console.log(gp);
  //   	if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
  //   		console.log("Valid gamepad detected");
  //   		valid = i;
  //   		gameLoop();
  //   	}

		//   console.log("Gamepad invalid");
		//   return false
		// }

		// function pollGamepads() {
		//   var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		//   for (var i = 0; i < gamepads.length; i++) {
		//     var gp = gamepads[i];
		//     if (gp) {
		//       let gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
		//         ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

		//       console.log(gamepadInfo);
		// 	  	validGamepad(i);
		// 	  	clearInterval(interval);
				  
		//     }
		//   }


		// }

		// function buttonPressed(b) {
		//   if (typeof(b) == "object") {
		//     return b.pressed;
		//   }
		//   return b == 1.0;
		// }

		// function gameLoop() {
		//   var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		//   //if can't find gamepads without Unknown Gamepad
		//   if (!gamepads[valid]) {
		//   	console.log("game loop stopped.");
		//     return;
		//   }
	  

		//   var gp = gamepads[valid];
		//   if (buttonPressed(gp.buttons[0])) {
		//     console.log("Button 0 pressed");
		//   } else if (buttonPressed(gp.buttons[2])) {
		//     console.log("Button 2 pressed");
		//   }
		//   if (buttonPressed(gp.buttons[1])) {
		//     console.log("Button 3 pressed");
		//   } else if (buttonPressed(gp.buttons[3])) {
		//     console.log("Button 4 pressed");
		//   }

		//   start = requestAnimationFrame(gameLoop);
		// }

  }

  resetButtons = () => {
  	this.circle = 0;
		this.circleTriangle = 0;
		this.circleRTwo = 0;
		this.triangle = 0;
		this.triangleRTwo = 0;
		this.rTwo = 0;
  }

  findInput = inputString => {

  	this.resetButtons()

  	if (!inputString) {
  		return;
  	}
  	//find the index of a button input in the options state array
  	const i = this.state.options.findIndex( option => {
  		return option.input === inputString;
  	});


  	if (i === -1) {
  		console.log("not found");
  		return;
  	}

  	const option = this.state.options[i];

  	console.log("option:", option.name, "\nindex:", i);
  	
  	this.doCombo(option, i);

  }

  // gateInput = () => {

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
  doCombo = (option, index) => {

  	this.setState({ select: index })

  	const nextMove = option;
  	this.setState({ attack: nextMove })
  	this.stageMoves(option);
  }

	render() {
		return (
			<div id="combo-body">
				<div className="shade" />
								<div id="combo-title" className="row">
						<h1 className="center-align">Combo Test - Charge Blade</h1>
						<hr />
					</div>

				<div className="container">
			
					
					<div className="row combo">
					

						<div className="col s6">
							<h3>Current Attack:</h3>

																<InfoPanel
											key={this.state.attack.name}
											name={this.state.attack.name}
											description={this.state.attack.description}
										/>
							<ReactTransitionGroup>
							<Attack
								id={this.state.attack.moveID}
								key={this.state.attack.moveID}
								name={this.state.attack.name}
								select={this.state.select}
							/>
							</ReactTransitionGroup>

						</div>

						<div className="col s6">
													<h3>Options:</h3>


						<ReactTransitionGroup>
							{this.state.options.map((option, index) => {
								return (
									<Option
										index={index}
										id={option.moveID}
										key={option.moveID}
										name={option.name}
										input={option.input}
										onClick={() => this.doCombo(option, index)}
									/>
								);
							})}
							</ReactTransitionGroup>
						</div>

					</div>  
				</div>









    


			</div>
		)
	}
}
export default Combo;

