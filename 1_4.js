var myVar;
var i = 0;

function ShowMessageTimer(){
    myVar=setInterval(show,1000)
}

function show(){
   i++; 
    console.log("coucou moi " + i);
    if(i>=3){
        clearInterval(myVar);
    } 
}

ShowMessageTimer();