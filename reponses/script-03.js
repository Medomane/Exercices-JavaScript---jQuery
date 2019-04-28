$(function(){
	//Créer une balise <pre> et l'ajouter dans la div
	$('<pre></pre>').appendTo('#ce') ;

	//Ajouter la classe CSS «language-javascript» à la balise <pre>
	$("#ce pre").addClass("language-javascript") ;

	//Créer une balise <code> et l'ajouter dans la balise <pre>
	$('<code></code>').appendTo('#ce pre') ;

	//Faire une requete AJAX pour récupérer le ficher user.json sous format texte
	$.getJSON( "files/users.json", function(d) {

		//Ajouter son contenu dans la balise <pre>
		$("#ce pre code").append(JSON.stringify(d)) ;

		//Appeler la métode
		Prism.highlightAll() ;
	}) ;

}) ;