document.addEventListener('DOMContentLoaded', function() {
    let myVar=4;

    function titi(){
       const myVar=5;
    }
    titi();
    
    console.log(myVar);
})