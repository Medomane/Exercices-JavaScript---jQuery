//Récupérez les utilisateurs et stockez-les dans la variable users
$.getJSON( "files/users.json", function(d) {
	var users = d ;

	//Créez un tableau html
	var tbl = $("<table border='1'></table>") ;

	//Ajouter une ligne avec les entetes Email et Token
	tbl.append("<tr><th>Email</th><th>Token</th></tr>") ;

	//Pour chaque utilisateur, ajouter une ligne et des cellules l'email et le token
	for (var i = 0; i < users.length ; i++) {
		tbl.append("<tr><td>"+users[i].email+"</td><td>"+users[i].token+"</td></tr>") ;
	}

	$("#ce").append(tbl) ;
}) ;







