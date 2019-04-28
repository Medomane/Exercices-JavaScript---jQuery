//Attacher un événement keypress à la zone de texte #f1 et analyser l'objet Event dans la console
$("#f1").keypress(function(e){
	console.log(e) ;
}) ;

//L'attribut charCode de l'objet Event permet de récupérer le code du caractère. Faire en sorte que la div#out recopie le contenu de de #f1
$("#f1").keypress(function(e){
	$("#out").text(e.currentTarget.value+String.fromCharCode(e.charCode)) ;
});

//Appliquer un filtre au texte saisie de sorte que ne s'affichent que les chiffres.
$("#f1").keypress(function(e){
	if(isNaN(parseInt(e.key))) return false ;
}) ;

//la meme chose dans #f2 à la différence que la recopie ne se fasse que pour des lots de trois caractères
var i="" ;
$("#f2").keypress(function(e){
	if((i.length%2) == 0 && i != ""){
		e.currentTarget.value += i ;
		i = "" ;
	}
	else{
		i+= e.key ;
		return false ;
	}
}) ;