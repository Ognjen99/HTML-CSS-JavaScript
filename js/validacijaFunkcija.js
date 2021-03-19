function validacija(){
    var ime=document.getElementById("ime");
    
    
    var impr=ime.value.split(" ");


    if(ime.value=="" ){
        alert("Ime i prezime nepopunjeno");
        return false;
    }
    else {
        true;
    }


    if(impr<2){
        alert("Fali ime/prezime");
        return false;
    }
    else {
        true;
    }


    


    if (!isNaN(ime.value)) {
        alert("Dozvoljeni su samo karakteri"); 
        return false;
    } else {
        true;
    }


    

  
    

}