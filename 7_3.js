var date = new Date( 2018, 9, 16);

console.log(date.toLocaleDateString('fr-FR',{
day : 'numeric',
year : 'numeric',
month : 'short'


}));