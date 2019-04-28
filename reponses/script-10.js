//En agissant sur les style CSS de la div.box fiare une recopie de zone survolée à l'echelle réélle de l'image
$("#imgsrc img").mousemove(function(e){
	//console.log(e) ;
	$('.box').find('img').remove() ;
	$("<img src='../interface/images/monalisa-orig.png'></img>").appendTo(".box")
	.height(1200).css({
		transform : 'translate('+parseFloat(-e.offsetX*4.8)+'px,'+parseFloat(-e.offsetY*4.8)+'px)'
	});
}) ;