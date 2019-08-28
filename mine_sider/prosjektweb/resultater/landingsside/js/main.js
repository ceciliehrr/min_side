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
'{"personID":"1", "kommunenummer":"123", "bruksenhetstype":"123", "adressenavn":"Lilleveien", "adressenummer":"12", "adressekode":"2613", "poststed":"Lillehammer"} ]}';

var dbFolk = '{"folkeregisteret":[' +
'{"personID":"1", "fornavn":"Bjørn", "mellomnavn":" ", "etternavn":"Bar"},'+
'{"personID":"2", "fornavn":"Lise", "mellomnavn":" ", "etternavn":"Nilsson"},'+
'{"personID":"3", "fornavn":"Evelyn", "mellomnavn":" ", "etternavn":"Hansen"},'+
'{"personID":"4", "fornavn":"Knut", "mellomnavn":"E. P. ", "etternavn":"Tråden"},'+
'{"personID":"5", "fornavn":"Per", "mellomnavn":" ", "etternavn":"Nyse"},'+
'{"personID":"6", "fornavn":"Eli", "mellomnavn":" ", "etternavn":"Hove"} ]}';

var dbOrg ='{"enhetsregisteret": [' +
'{"orgNr":"990039410","foretaksnavn":"Bjørn Pub" ,"Daglig leder":"Bjørn Bar" ,"bransje":"Pubeier "} ]}';


innF = JSON.parse(dbFolk);
innI = JSON.parse(dbIn);
//innA = JSON.parse(dbBr);
innO = JSON.parse(dbOrg);
//Bjørn sine data inn i brukergrensesnittet
document.getElementById("fornavnTittel").innerHTML = innF.folkeregisteret[0].fornavn;
document.getElementById("navn").innerHTML = innF.folkeregisteret[0].fornavn + " " +  innF.folkeregisteret[0].mellomnavn + " " + innF.folkeregisteret[0].etternavn;

document.getElementById("kontaktperson").innerHTML = innF.folkeregisteret[3].fornavn + " " + innF.folkeregisteret[3].mellomnavn + " " + innF.folkeregisteret[3].etternavn ;

document.getElementById("telefon").innerHTML = innI.innbygger[0].telefon;
document.getElementById("mail").innerHTML = innI.innbygger[0].mail;

document.getElementById("arbeid").innerHTML = innO.enhetsregisteret[0].bransje;

innM = JSON.parse(dbMatr);
document.getElementById("adresse").innerHTML = innM.matrikkelen[0].adressenavn + " " + innM.matrikkelen[0].adressenummer;
document.getElementById("poststed").innerHTML = innM.matrikkelen[0].adressekode + " " + innM.matrikkelen[0].poststed;


                                  

