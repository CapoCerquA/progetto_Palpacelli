function GeneraDirezione(int gradi){
	let max= gradi+30;
	let min=gradi-30;
	
	let risultato=Math.floor(Math.random()*max-min)+min;
	
	if(risultato>359 || risultato<1){
		GeneraDirezione(gradi);
	}
		
	
	return risultato;
}