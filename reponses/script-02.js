$(function(){

	//Click sur la première div
	var etat = true,i ;
	$("#ce div").first().click(function(event) {
		if(etat == true){
			i=1 ;
			hide() ;
			etat = false ;
		}
		else{
			i = $("#ce div").length-1 ;
			show() ;
			etat = true ;
		}
	});


	//Les div vont disparaître les unes à la suite des autres, en commançant par la première à gauche.
	function hide(){
		if(i < $("#ce div").length){
			$("#ce div").eq(i).hide(200) ;
			i++ ;
			setTimeout(hide,200) ;
		}
	}

	//elles réaparaîttront les unes à la suite des autres après un délai
	function show(){
		if(i > 0){
			$("#ce div").eq(i).show(200) ;
			i-- ;
			setTimeout(show,200) ;
		}
	}
}) ;