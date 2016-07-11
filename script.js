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
});