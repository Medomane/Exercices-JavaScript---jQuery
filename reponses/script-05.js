//Parcourir les lignes du tableau et claculer les sous-totaux
var tg = 0 ;
for(var i=1;i<$(".markup table tr").length-1;i++){
	var td = $(".markup table tr").eq(i).children('td') ;
	var prix = parseInt(td.eq(1).text()) ;
	var qte = parseInt(td.eq(2).text()) ;
	$(".markup table tr").eq(i).children('td').last().text(eval(prix*qte)) ;

	//Calculer le total général
	tg += eval(prix*qte) ;
}


//Créer une fonction qui permet de formater les nombres : string ← format(number) "23 345.60" ← format(23345.6)
function format(number){
	var str  = number.toString() ;
	var nstr = "" ;
	let i = 0 ;
	while(i<str.length){
		if(str[i] == '.') break ;
		i++ ;
	}
	if(i==0) alert("Erreur !!!") ;
	else if(i>3){
		let a = i - 1;
		while(a>-1){
			if(a != (i-1) && (a-1)%3 == 0) nstr += " " ;
			nstr += str[a] ;
			a--;
		}
		nstr = nstr.split('').reverse().join('') ;
		for(let j=i;j<str.length;j++) nstr += str[j] ;
		return nstr ;
	}
	else return str ;
}