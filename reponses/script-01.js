$(function(){

	//Modification de la couleur  de la premère div
	$("#ce div").first().css("color","red") ;

	//Cloner la première et l'ajouter à la fin de la liste des div
	$("#ce div").first().clone().appendTo('#ce') ;

	//Déplacer la dernière div et la mettre au début de la liste
	$("#ce div").last().prependTo("#ce") ;

	//Créer une nouvelle div, l'ajouter à la fin de la liste et afficher dedans le nombre total des div de la liste (y compris celle ajoutée)
	$('<div>').text("Nombre de div est : "+($("#ce div").length+1)).appendTo("#ce");

	//Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
	$("#ce div").each(function(i,e){
		$("#ce div").eq(i).text((i+1)+" - "+$("#ce div").eq(i).text()) ;
	}) ;
	
}) ;