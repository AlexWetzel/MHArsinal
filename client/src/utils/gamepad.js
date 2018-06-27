class Gamepad {

	Constructor() {
		this.counter = 0;
	}

	hello() {
		console.log('hello');
		console.log(this.counter);
		this.doCount();
	}

	doCount() {
		for (var i = 0; i < 10; i++) {
			
			console.log(i);
		}
	}
	// constructor() {
	// 	// super();

	// 	this.start;
	// 	this.interval;
	// 	this.valid;
	// 	this.sensitivity = 10;

	// 	//Each used button combination gets a counter
	// 	this.circle = 0;
	// 	this.circleTriangle = 0;
	// 	this.circleRTwo = 0;
	// 	this.triangle = 0;
	// 	this.triangleRTwo = 0;
	// 	this.rTwo = 0;
	// }

 // 	buttonPressed = b => {
	//   if (typeof(b) == "object") {
	//     return b.pressed;
	//   }
	//   return b == 1.0;
	// }

 //  gameLoop = () => {
	//   var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//   //if can't find gamepads without Unknown Gamepad
	//   if (!gamepads[this.valid]) {
	//   	console.log("game loop stopped.");
	//     return;
	//   }  

	//   const gp = gamepads[this.valid];

	//   // const = input;
	//   if(gp.axes[1] < -0.9 && this.buttonPressed(gp.buttons[3])) {
	//   	console.log("triangle fwd");
	//   	this.findInput("fwd-plus-triangle");
	//   }

	//   else if (this.buttonPressed(gp.buttons[1]) && (gp.axes[0] < -0.9 || gp.axes[0] > 0.9 || gp.axes[1] < -0.9 || gp.axes[1] > 0.9)) {
	//   	console.log("dir. circle");
	//   	this.findInput("dir-plus-circle");
	//   }
	
	//   else if (this.buttonPressed(gp.buttons[1])) {
	//   	//circle
	//     // console.log("Circle pressed!");
	//     if (this.buttonPressed(gp.buttons[3])) {
	//     	this.circleTriangle ++;

	//     	if (this.circleTriangle === this.sensitivity) {
	//     		console.log("circle triangle");

	//     		this.findInput("triangle-plus-circle");
	//     	}

	//     } else if (this.buttonPressed(gp.buttons[7])) {
	//     	this.circleRTwo ++;

	//     	if (this.circleRTwo === this.sensitivity) {
	//     		console.log("circle R2");

	//     		this.findInput("R2-plus-circle");
	//     	}
	//     } else {
	//     	this.circle ++;

	//     	if (this.circle === this.sensitivity) {
	//     		console.log("circle");

	//     		this.findInput("circle");
	//     	}
	//     }
	//   }
	  
	//   else if (this.buttonPressed(gp.buttons[3])) {
	//   	//triangle
	//     console.log("Triangle pressed!");
	//     if (this.buttonPressed(gp.buttons[7])) {
	//     	this.triangleRTwo ++;

	//     	if (this.triangleRTwo === this.sensitivity) {
	//     		console.log("R2 + triangle");
	//     		this.findInput("R2-plus-triangle");
	//     	}
	//     }	else {
	//     	this.triangle ++;
	//     	if (this.triangle === this.sensitivity) {
	//     		console.log("triangle");
	//     		this.findInput("triangle");
	//     	}
	//     }
	//     	    // this.findInput();
	//   }
	//   else if (this.buttonPressed(gp.buttons[7])) {
	//     // console.log("R2");
	//     this.rTwo ++;
 //    	if (this.rTwo === this.sensitivity) {
 //    		console.log("triangle");
 //    		this.findInput("R2");
 //    	}
	//   }
	 
	//   // console.log("loop again");
	//   this.start = requestAnimationFrame(this.gameLoop);
	// }

	// // Gets the index of the first valid gamepad
	// validGamepad = i => {

	// 	const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

	//   const gp = gamepads[i];
	  
	//   // If the id does not have "Unknown Gamepad," it is valid
	//   // TODO: Change criteria to check the number of buttons in an array or something similar
 //  	if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
 //  		console.log("Valid gamepad detected");
 //  		this.valid = i;
 //  		this.gameLoop();
 //  	}

	//   console.log("Gamepad invalid");
	//   return false;
	// }
	
	// pollGamepads = () => {

	// 	console.log("pollGamepads called")
	//   const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	//   for (let i = 0; i < gamepads.length; i++) {
	//     const gp = gamepads[i];
	//     if (gp) {
	//       const gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
	//         ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

	//       console.log(gamepadInfo);
	// 	  	this.validGamepad(i);
	// 	  	clearInterval(this.interval);
			  
	//     }
	//   }
	// }

 //  gamepadListener = () => {

	// 	window.addEventListener("gamepaddisconnected", function(e) {
	// 	  let gamepadInfo = "Waiting for gamepad.";
	// 	  console.log(gamepadInfo);

	// 	  // cancelRequestAnimationFrame(start);
	// 	});

	// 	if (!('ongamepadconnected' in window)) {
	// 	  // No gamepad events available, poll instead.
	// 	  console.log("Checking for gamepads");
	// 	  this.interval = setInterval(this.pollGamepads, 500);
	// 	  // this.interval = setInterval(console.log(this.message), 500);
	// 	}

 //  }

 //  resetButtons = () => {
 //  	this.circle = 0;
	// 	this.circleTriangle = 0;
	// 	this.circleRTwo = 0;
	// 	this.triangle = 0;
	// 	this.triangleRTwo = 0;
	// 	this.rTwo = 0;
 //  }

 //  findInput = inputString => {

 //  	this.resetButtons()

 //  	if (!inputString) {
 //  		return;
 //  	}
 //  	//find the index of a button input in the options state array
 //  	const i = this.state.options.findIndex( option => {
 //  		return option.input === inputString;
 //  	});


 //  	if (i === -1) {
 //  		console.log("not found");
 //  		return;
 //  	}

 //  	const option = this.state.options[i];

 //  	console.log("option:", option.name, "\nindex:", i);
  	
 //  	this.doCombo(option, i);
 //  }
}

const gamepad = new Gamepad()

export default gamepad;