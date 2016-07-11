$(document).ready(function () {

	bola = {
		x: 20,
		y: 20,
		velocidade: 10,
		direcao: 1,

		move_bola:function() {
			var bola = $("#bola");
			var y = parseInt(bola.attr('cy'));
			while(y < 480){
				y += 10;
				bola.attr('cy',y)
			}
		}

	};
	


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
		}
		
		if( yBola >= altura){
			yBola = altura;
		}
		else{
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

	main();
	function main(e) {
		setInterval(move_bola, 200);
	}
});
