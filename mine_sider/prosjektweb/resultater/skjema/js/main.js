// Som en protyp for database
var dbIn = '{"innbygger":[' +
'{"personID":"1", "telefon":"29382401", "mail":"bjorn@mail.com" }, ' +
'{"personID":"2", "telefon":"29382401", "mail":"bjorn@mail.com" }, ' +
'{"personID":"3", "telefon":"29382401", "mail":"bjorn@mail.com" } ]}';

var dbBr = '{"ansatte":[' +
'{"personID":"4", "sektor":"Administrasjon", "arbeidstittel":"Saksbehandler" },' +
'{"personID":"5", "sektor":"Helse",          "arbeidstittel":"Sykepleier" },' +
'{"personID":"6", "sektor":"Eiendom",        "arbeidstittel":"Saksbehandler" }]}';


var dbMatr = '{"matrikkelen":[' +
'{"gbrn":"123", "bruksenhetstype":"181 - Garasjeuthus anneks til bolig"} ]}';

var dbFolk = '{"folkeregisteret":[' +
'{"personID":"1", "fornavn":"Bjørn", "mellomnavn":" ", "etternavn":"Bar", "adressenavn":"Lilleveien", "adressenummer":"12", "adressekode":"2613", "poststed":"Lillehammer"},'+
'{"personID":"2", "fornavn":"Lise", "mellomnavn":" ", "etternavn":"Nilsson"},'+
'{"personID":"3", "fornavn":"Evelyn", "mellomnavn":" ", "etternavn":"Hansen"},'+
'{"personID":"4", "fornavn":"Knut", "mellomnavn":"E. P. ", "etternavn":"Tråden"},'+
'{"personID":"5", "fornavn":"Per", "mellomnavn":" ", "etternavn":"Nyse"},'+
'{"personID":"6", "fornavn":"Eli", "mellomnavn":" ", "etternavn":"Hove"} ]}';

var dbOrg ='{"enhetsregisteret": [' +
'{"orgNr":"990039410","foretaksnavn":"Gamle Norge Pub" ,"Daglig leder":"Bjørn Bar" ,"bransje":"Pubeier "} ]}';


innF = JSON.parse(dbFolk);
innI = JSON.parse(dbIn);
//innA = JSON.parse(dbBr);
innM = JSON.parse(dbMatr);
innO = JSON.parse(dbOrg);
//Bjørn sine data inn i brukergrensesnittet
//folkeregisteret
document.getElementById("fornavnTittel").innerHTML = innF.folkeregisteret[0].fornavn;
document.getElementById("navn").innerHTML = innF.folkeregisteret[0].fornavn + " " +  innF.folkeregisteret[0].mellomnavn + " " + innF.folkeregisteret[0].etternavn;
document.getElementById("kontaktperson").innerHTML = innF.folkeregisteret[3].fornavn + " " + innF.folkeregisteret[3].mellomnavn + " " + innF.folkeregisteret[3].etternavn ;
document.getElementById("adresse").innerHTML = innF.folkeregisteret[0].adressenavn + " " + innF.folkeregisteret[0].adressenummer;
document.getElementById("poststed").innerHTML = innF.folkeregisteret[0].adressekode + " " + innF.folkeregisteret[0].poststed;
//innbygger
document.getElementById("telefon").innerHTML = innI.innbygger[0].telefon;
document.getElementById("mail").innerHTML = innI.innbygger[0].mail;
//enhetsregisteret
document.getElementById("arbeid").innerHTML = innO.enhetsregisteret[0].bransje;
               
/***** SKJEMA FUNKSJONALITET******/
//Legger inn info vi allerede har om brukeren:

//Folkeregisteret
var fornavn = innF.folkeregisteret[0].fornavn;
var etternavn = innF.folkeregisteret[0].etternavn;
//enhetsregisteret
var orgnr = innO.enhetsregisteret[0].orgNr;
var fnavn = innO.enhetsregisteret[0].foretaksnavn;
//Matrikkelen
var adresse  = innF.folkeregisteret[0].adressenavn + " " + innF.folkeregisteret[0].adressenummer;
var adressekode = innF.folkeregisteret[0].adressekode;
var poststed = innF.folkeregisteret[0].poststed;
//Innbygger¨
var tlf = innI.innbygger[0].telefon;
var epost = innI.innbygger[0].mail;
//Trykker man på endre bestilling, legger man til data fra database
$(function(){
  $('#endreBevilling').click(function(){
    if ($(this).is(':checked'))
    {  
        $("#orgnr").val(orgnr);
        $("#orgnavn").val(fnavn);
        $("#adr").val(adresse);
        $("#pnr").val(adressekode);
        $("#psted").val(poststed);
        $("#tlf").val(tlf);
        $("#epost").val(epost);
    }
  });
});
// Bjørn sitt navn og adresse

$("#fornavnP").val(fornavn);
$("#etternavnP").val(etternavn);
$("#adrP").val(adresse);
$("#pnrP").val(adressekode);
$("#pstedP").val(poststed);

//Fjerne verdier i form om man trykker på Ny bevilling
function ClearFields(ctrl) {
  var fieldset = ctrl.closest('fieldset');
  $('input[type="text"]').val("");
  $("#fornavnP").val(fornavn);
  $("#etternavnP").val(etternavn);
  $("#adrP").val(adresse);
  $("#pnrP").val(adressekode);
  $("#pstedP").val(poststed);
}
function enable(ctrl) {
  var fieldset = ctrl.closest('fieldset');
  //$('input[type="text"].input2').val("");
  $('input[type="text"].input2').prop('disabled', false);
}
function disable(ctrl) {
  var fieldset = ctrl.closest('fieldset');
  //$('input[type="text"].input2').val("");
  $('input[type="text"].input2').prop('disabled', true);
}

/***AUTOCOMPLETE GOOGLE API****/
function initialize() {
  var inputpSted = document.getElementById('psted');
  var inputAdresse = document.getElementById('adr');
  new google.maps.places.Autocomplete(inputpSted);
  new google.maps.places.Autocomplete(inputAdresse);
}

google.maps.event.addDomListener(window, 'load', initialize);

//SKJEMA FUNKSJONALITET VED HJELP AV W3SCHOOLS.com

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Send";
  } else {	
    document.getElementById("nextBtn").innerHTML = "Neste";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, z, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByClassName("invMessage");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      z[i].style.visibility = "visible";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



