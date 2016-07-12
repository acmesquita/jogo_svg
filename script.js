/* GLOBAL VARS */
var bola, canvas;
var xBola, yBola, rBola;
var largura, altura;
var velocityX, velocityY;


$(document).ready(function () {

/* Init variables */
	bola = $("#bola");
	canvas = $("#canvas");

	xBola = parseInt(bola.attr('cx'));
	yBola = parseInt(bola.attr('cy'));
	rBola = parseInt(bola.attr('r'));

	largura = parseInt(canvas.attr('width'));
	altura = parseInt(canvas.attr('height'));

	velocityX = 5;
	velocityY = 7;


	function move_bola(e) {
		
		var bola = $("#bola");
		var canvas = $("#canvas");

		var xBola = parseInt(bola.attr('cx'));
		var yBola = parseInt(bola.attr('cy'));

		var largura = parseInt(canvas.attr('width'));
		var altura = parseInt(canvas.attr('height'));

		if(yBola >= 480 && xBola >=480){
			bola.attr('cx', 20);
			bola.attr('cy', 20);
		}
		
		else{
			xBola += 10;
			yBola += 10;
		}
		

		bola.attr('cx', xBola);
		bola.attr('cy', yBola);
	}

	function move_barra(e) {		

		$(document).keydown(function (e) {
			var barra = $("#barra");

			if(e.keyCode == 39){
				var x = parseInt(barra.attr('x'));
				if(x >= 490){
					x = x;
				}
				else{
					x += 10;				
				}
				barra.attr('x',x);
			}
			else if(e.keyCode == 37){
				var x = parseInt(barra.attr('x'));
				if(x <= 10){
					x = x;
				}
				else{
					x -= 10;
				}
				barra.attr('x',x);
			}
		});

	};

	move_barra();
	
	move_bola();


/* MOVE FUNCTIOON */
	function moveBola(){
		/*Move no X*/
		if(xBola < rBola || xBola > largura - rBola){
			velocityX *= (-1);
		}
		xBola += velocityX;
		bola.attr('cx', xBola);

		/*Move no Y*/
		if(yBola < rBola || yBola > altura - rBola){
			velocityY *= (-1);
		}
		yBola += velocityY;
		bola.attr('cy', yBola);
	}

	main();
	function main(e) {
		//setInterval(move_bola, 200);
		setInterval(moveBola, 15);
	}
});

function set_velocity(){
	velocityX = parseInt( $("#vX").val() );
	velocityY = parseInt( $("#vY").val() );
}
