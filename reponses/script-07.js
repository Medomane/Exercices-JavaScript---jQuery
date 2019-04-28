//Attachez un handler pour l'événement keydown sur l'objet document
$(document).keydown(function(e) {
	//Si la touche SHIFT et appuyée et que l'on apuie sur une touche de direction (←, ↑, → ou ↓) la div div.box se déplace dans la direction choisie.
	if(e.key == "ArrowRight" && e.shiftKey == true ){
		$(".box").animate({left : '+=1px'},25);	
	}
	else if(e.key == "ArrowLeft" && e.shiftKey == true ){
		$(".box").animate({left : '-=5px'},25);	
	}
	else if(e.key == "ArrowUp" && e.shiftKey == true ){
		$(".box").animate({top : '-=5px'},25);	
	}
	else if(e.key == "ArrowDown" && e.shiftKey == true ){
		$(".box").animate({top : '+=5px'},25);	
	}

	//Peut-on déplacer l'objet simultanément en haut et à gauche par exemple ? Si oui, Comment ? Répendre en commentaire dans script-07.js
	//Oui on peut si on a bien profité de la fonction complete de animate animate(properties [, duration ] [, easing ] [, "complete" ])
});