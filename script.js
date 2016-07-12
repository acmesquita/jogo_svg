$(document).ready(function () {

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




/* GLOBAL VARS */
	var bola = $("#bola");
	var canvas = $("#canvas");

	var xBola = parseInt(bola.attr('cx'));
	var yBola = parseInt(bola.attr('cy'));
	var rBola = parseInt(bola.attr('r'));

	var largura = parseInt(canvas.attr('width'));
	var altura = parseInt(canvas.attr('height'));

	var velocityX = 5;
	var velocityY = 7;

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


	function set_yVelocity(){
		console.log($("#vY").val());
		velocityY = $("#vY").val();
	}


	main();
	function main(e) {
		//setInterval(move_bola, 200);
		setInterval(moveBola, 15);
	}
});
