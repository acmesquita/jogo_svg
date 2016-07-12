/* GLOBAL VARS */
var bola, canvas;
var barra, xBarra, yBarra, larguraBarra, alturaBarra;
var xBola, yBola, rBola;
var largura, altura;
var velocityX, velocityY, velocityBarra;
var score = 0;
var divScore;

/*Para testes*/

var divVelocidadeX, divVelocidadeY, divVelocidadeBarra;


$(document).ready(function () {

/* Init variables */
	bola = $("#bola");
	canvas = $("#canvas");
	barra = $("#barra");

	xBarra = parseInt(barra.attr('x'));
	yBarra = parseInt(barra.attr('y'));
	larguraBarra = parseInt(barra.attr('width'));
	alturaBarra =  parseInt(barra.attr('height'));

	xBola = parseInt(bola.attr('cx'));
	yBola = parseInt(bola.attr('cy'));
	rBola = parseInt(bola.attr('r'));

	largura = parseInt(canvas.attr('width'));
	altura = parseInt(canvas.attr('height'));

	divScore = $("#score");

	divScore.text(score);

	velocityX = 3;
	velocityY = 2;
	velocityBarra = 10;


	function move_barra(e) {		

		$(document).keydown(function (e) {

			if(e.keyCode == 39){
				xBarra += velocityBarra;
				if(xBarra > (largura - larguraBarra)){
					xBarra = largura - larguraBarra;
				}
				barra.attr('x',xBarra);

			}
			else if(e.keyCode == 37){
				xBarra -= velocityBarra;
				if(xBarra < 0 ){
					xBarra = 0;
				}
				barra.attr('x',xBarra);
			}
		});

	};

	move_barra();


/* MOVE FUNCTIOON */
	function moveBola(){
		/*Move no X*/
		if(xBola < rBola || xBola > largura - rBola){
			velocityX *= (-1);
		}
		xBola += velocityX;
		bola.attr('cx', xBola);

		/*Move no Y na parte de cima*/
		if(yBola < rBola){ 
			velocityY *= (-1);
		}

		/*Checar se o jogo acabou*/
		if(yBola > altura - rBola){
			location.reload();
		}

		/*Checar se colidiu com a barra*/
		if(yBola > (altura - (rBola + alturaBarra + alturaBarra)))
		{
			if((xBola + rBola) >= xBarra && (xBola + rBola) <= (xBarra + larguraBarra) ){
				
				if(score % 5 == 0){
					velocityX += 0.5;
					velocityY += 0.5;
					velocityBarra += 5;
				}

				score += 1;
				divScore.text(score) ;

				velocityY *= (-1);
			}
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
