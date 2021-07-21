let canvas = null;
let context = null;
let cW = null;
let cH = null;

let pressedKeys = {};

window.onload = function() {
	'use strict';

	canvas = document.getElementById('app');
	context = canvas.getContext('2d');
	cW = canvas.width;
	cH = canvas.height;

	window.requestAnimationFrame(GameLoop);
}

window.onkeyup = function(e) { pressedKeys[e.code] = false; }
window.onkeydown = function(e) { pressedKeys[e.code] = true; }

function GameLoop(timeStamp) {
	'use strict';

	Update();
	Draw();

	window.requestAnimationFrame(GameLoop);
}

function Draw() {
	'use strict';

	// clean context
	context.fillStyle = '#999999';
	context.fillRect(0, 0, cW, cH);

	context.fillStyle = '#ffffff';
	if(pressedKeys['KeyW']) {
		context.fillStyle = '#ff0000';
	}
	context.fillRect(cW / 2 - 25, 100, 50, 50); // W

	context.fillStyle = '#ffffff';
	if(pressedKeys['KeyA']) {
		context.fillStyle = '#ff0000';
	}
	context.fillRect(cW / 2 - 75, 150, 50, 50); // A

	context.fillStyle = '#ffffff';
	if(pressedKeys['KeyS']) {
		context.fillStyle = '#ff0000';
	}
	context.fillRect(cW / 2 - 25, 150, 50, 50); // S

	context.fillStyle = '#ffffff';
	if(pressedKeys['KeyD']) {
		context.fillStyle = '#ff0000';
	}
	context.fillRect(cW / 2 + 25, 150, 50, 50); // D
}

function Update() {
	'use strict';

	// 
}
