function abfrage(){
	var vorname = document.getElementsByName('vorname')[0];
	var datum = document.getElementsByName('datum')[0];
	var nachname = document.getElementsByName('nachname')[0];
	var straße = document.getElementsByName('straße')[0];
	var hnr = document.getElementsByName('hnr')[0];
	var plz = document.getElementsByName('plz')[0];
	var ort = document.getElementsByName('ort')[0];
	var email = document.getElementsByName('email')[0];
	var telefonnummer = document.getElementsByName('telefonnummer')[0];
	var fehler = 0;
	
	if(datum.value != ""){
		if(datum.value.lenght < 6){
			fehler++;
		}
	}else{
		fehler++;
	}
	
	if(vorname.value == ""){
		fehler++;
	}
	
	if(nachname.value == ""){
		fehler++;
	}
	
	if(straße.value == ""){
		fehler++;
	}
	
	if(hnr.value == ""){
		fehler++;
	}
	
	if(plz.value != ""){
		if(plz.value.length < 5){
			fehler++;
		}
	}else{
		fehler++;
	}
	
	if(ort.value == ""){
		fehler++;
	}
	
	if(email.value != ""){
		if (email.value.indexOf("@") == -1){
			fehler++;
		}
		if (email.value.length < 7){
			fehler++;
		}
	}else{
		fehler++;
	}
	
	if(telefonnummer.value != ""){
		if(telefonnummer.value.indexOf("+") == -1 && telefonnummer.value.indexOf("0") == -1){
				fehler++;
		}
	}else{
		fehler++;
	}
	
	if(fehler == 0){
		alert("Wir haben Ihre Nachricht erhalten! Sie werden auf die Startseite vom Johner Institut weitergeleitet.");
		window.location = "https://www.johner-institut.de/";
	}else{
		if(fehler == 1){
			alert("Es wurde 1 Pflichtfeld nicht richtig ausgefüllt!");
		}
		if(fehler > 1){
			alert("Es wurden " + fehler + " Pflichtfelder nicht richtig ausgefüllt!");
		}
	}
}


