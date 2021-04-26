/*
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/
var name = prompt("1-3 Inserisci qui il tuo nome");
console.log(name);
document.getElementById("name").innerHTML=name;

var surname = prompt("2-3 Inserisci qui il tuo cognome");
console.log(surname);
document.getElementById("surname").innerHTML=surname;

var color = prompt("3-3 Inserisci qui il tuo colore preferito");
console.log(color);
document.getElementById("color").innerHTML=color;

var pass = name + surname + color + "21";
console.log(pass);
document.getElementById("pass").innerHTML=pass;