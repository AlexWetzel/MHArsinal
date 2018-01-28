export default gamepad = () =>
	interval= ""
	start= ""

	gamepadListener = () => {

		window.addEventListener("gamepadconnected", function(e) {
		  var gp = navigator.getGamepads()[e.gamepad.index];
		  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";

		  // gameLoop();
		});

		window.addEventListener("gamepaddisconnected", function(e) {
		  gamepadInfo.innerHTML = "Waiting for gamepad.";

		  // cancelRequestAnimationFrame(start);
		});

	}

	checkGamepad = () => {
		var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	  for (var i = 0; i < gamepads.length; i++) {
	    var gp = gamepads[i];
	    if (gp) {
	      let gamepadInfo = "Gamepad connected at index " + gp.index + ": " + gp.id +
	        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
	      console.log(gamepadInfo);

				if (gp.id.slice(0, 15) !== "Unknown Gamepad") {
			  	console.log("Valid pad detected");
			  	gameLoop(gp.index);
			    clearInterval(interval);

			  }

	    }
	  }
	}

	buttonPressed = b => {
	  if (typeof(b) == "object") {
	    return b.pressed;
	  }
	  return b == 1.0;
	}

	gameLoop = i => {
	  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	  if (!gamepads) {
	    return;
	  }

	  // console.log(i);

	  var gp = gamepads[i];
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

	  start = requestAnimationFrame(gameLoop(i));
	};