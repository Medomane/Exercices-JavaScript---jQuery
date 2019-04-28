//A. JSON
//Chargez le fichier usa.json à l'aide d'une requete AJAX et affectez-le à la variable usa
$.getJSON('../files/usa.json',null, function(usa, textStatus) {
	if(textStatus == "success"){

		//Remplir la liste #la avec les noms des des états US.
		$.each(usa,function(i,e){
			$("<option></option>").text(e.state).appendTo('#la') ;
		}) ;

		//Attachez à la liste #la un handler change. Le handler doit synchroniser les villes de la liste #lb avec l'état de la liste #la.
		$("#la").change(function(){
			var str = $(this).val() ;
			console.log(str) ;
			if(str == ""){
				$('#lb').find('option').remove() ;
				$("<option>Sélectionner une ville</option>").appendTo('#lb') ;
				return false ;
			}
			$.each(usa,function(i,e){
				if(e.state == str){
					$('#lb').find('option').remove() ;
					for(var j=0;j<e.cities.length;j++){
						$("<option>"+e.cities[j]+"</option>").appendTo('#lb') ;
					}
				}
			}) ;
		})
	}
});


/* //B. XML
//Refaire les questions précédentes avec le fichier usa.xml

$.ajax({
    type: "GET",
    url: "../files/usa.xml",
    dataType: "xml",
    success: function(usa) { 
    	//Remplir la liste #la avec les noms des des états US.
		$(usa).find("usa").find("state").each( function(i,e){ 
			
		} );
    }
}); */