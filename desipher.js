var str = 'iFFthesiHisatCtoFesaHherHolCilHhiKetassaHherWiOeFtheIaDeWeresaHherCoArHroDriOnhoAlFFansraOa'+
'WitethantCHeoGilDorathOGroOOoWoilHhiKetasoWenAnaWDiWCtentoGDooFWennoGGatCoAiresoOGortiKleca'+
'thCoAOiCAneaWFeRoGsoaWsaFeWseNinanNaeRiOaWitaoWntitantasiltentnorchiteIerOethoFCoAGeelcalln'+
'hoctheKentrenAlttrCtothaWNoGchitcallhiHHeWaGtheNeCsoWtiaWnniOeshiristernitFaGGereWtHonataoW'+
'ncallCoArHroDriOntallKehiIesorrestlC';




var letters = 1;

let set1 = new Set();
var fr1 = {};

//fill set 1 with unoque letters
for (var i = 0; i <= str.length-letters; i++) {
	set1.add(str.substring(i,i+letters));
}




//count a percent of every letter in the text
for (var i = 0; i <= str.length-letters; i++) {
	
		fr1[str.substring(i,i+letters)] = 0;
	
} 
for (var i = 0; i <= str.length-letters ; i++) {
	if (set1.has(str.substring(i,i+letters))) {
		fr1[str.substring(i,i+letters)] += 1;
	}
	 
}


keysSorted = Object.keys(fr1).sort(function(a,b){return fr1[a]-fr1[b]});


  var myTable;

 	
  for (var i=0; i< Object.keys(keysSorted).length; i++) {
    myTable+="<table><tr>";
   
    myTable+="<td style='width: 100px; text-align: right;'>" +keysSorted[i] + "</td>"
    
    myTable+="<td style='width: 100px; text-align: right;'>" +(fr1[keysSorted[i]] / (str.length+1-letters) *100) .toFixed(4) + "</td></tr>";
    
  }  

   myTable+="</table>";



 document.write( myTable);