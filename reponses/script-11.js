//Créer la fonction damier()
damier() ;
function damier(n=8){
	var tbl = "<table>"
	for(let i=1;i<=n;i++){
		tbl += "<tr>" ;
		for(let j=1;j<=n;j++){
			var color = "",d=(250/n)-5;
			if(i%2 != 0){
				if(j%2 != 0) color = "black" ;
				else color = "white" ;
			}
			else{
				if(j%2 == 0) color = "black" ;
				else color = "white" ;
			}
			tbl += "<td style='background-color:"+color+";width:"+d+"px;height:"+d+"px'></td>";
		}
		tbl += "</tr>" ;
	}
	tbl += "</table>" ;
	$(".box").append(tbl) ;
}


//Attacher l'événement click au bouton.
function func(){
	var v = $("#inp").val() ;
	if(v != ""){
		$(".box table").remove() ;
		damier(parseInt(v)) ; 
	}
}