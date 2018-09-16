var text = 'Coucou 3';


var regex = /[0-9]+/;
console.log(regex.exec(text));



var regex2 = new RegExp('\\d');
console.log(regex2.exec(text));