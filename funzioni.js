function alertPesce(){
	window.alert("pesce generato");
}

function generaPesce() {
	
	//generazione pesci
  var pesci = ["pesce1.svg", "pesce2.svg", "pesce3.svg", "pesce4.svg"];
  var classi_pesci = ["pesce1", "pesce2", "pesce3", "pesce4"];

  for (let i = 0; i < pesci.length; i++) {
    let linkPesce = pesci[i];
    let valoreClasse = classi_pesci[i];

    var img_pesce = document.createElement('img');
    img_pesce.src = linkPesce;
    img_pesce.className = valoreClasse;

    document.getElementById('pesci').appendChild(img_pesce); 
  }


	//generazione bolle
	var classi_bolle=["bolla1", "bolla2", "bolla3"];
	
	for(let i=0; i<classi_bolle.length; i++){
		let linkBolle = "bolle.svg";
		let valoreClasse = classi_bolle[i];
	
	var img_bolle = document.createElement('img');
    img_bolle.src = linkBolle;
    img_bolle.className = valoreClasse;

    document.getElementById('pesci').appendChild(img_bolle); 
	}
	
  window.alert("Pesce generato");
}
