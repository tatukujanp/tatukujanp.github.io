

document.getElementById("laske").addEventListener("click", function() {
    let vuokra = document.getElementById("vuokra").value;
    let vastike = document.getElementById("vastike").value;
    let lyhennys = document.getElementById("lyhennys").value;
    let korko = document.getElementById("korko").value;
    let yllattavat = document.getElementById("yllattavat").value;
    let muut = document.getElementById("muut").value;

    
    let kassavirta = vuokra-vastike-lyhennys-korko-yllattavat-muut
    let verot = kassavirta * 0.3;

    document.querySelector(".brutto").innerHTML = kassavirta.toFixed(2) + " €";
    document.querySelector(".verot").innerHTML = verot.toFixed(2) + " €";
    document.querySelector(".netto").innerHTML = (kassavirta - verot).toFixed(2) + " €";

    
})

document.querySelector(".reset").addEventListener("click", function(){
    var elements = document.getElementsByTagName("input");
        for (var ii=0; ii < elements.length; ii++) {
          if (elements[ii].type == "text") {
            elements[ii].value = "";
          }
        }
    document.querySelector(".brutto").innerHTML = 0,00;
    document.querySelector(".verot").innerHTML = 0,00;
    document.querySelector(".netto").innerHTML = 0,00;

});


document.addEventListener("keypress", function(event){
    if(event.keyCode === 13) {
        let vuokra = document.getElementById("vuokra").value;
        let vastike = document.getElementById("vastike").value;
        let lyhennys = document.getElementById("lyhennys").value;
        let korko = document.getElementById("korko").value;
        let yllattavat = document.getElementById("yllattavat").value;
        let muut = document.getElementById("muut").value;

        
        let kassavirta = vuokra-vastike-lyhennys-korko-yllattavat-muut
        let verot = (vuokra-vastike-korko-yllattavat-muut) * 0.3;

        document.querySelector(".brutto").innerHTML = kassavirta.toFixed(2) + " €";
        document.querySelector(".verot").innerHTML = verot.toFixed(2) + " €";
        document.querySelector(".netto").innerHTML = (kassavirta - verot).toFixed(2) + " €";
    }});

    document.addEventListener("keypress", function(event){
            if(event.keyCode === 114) {
                var elements = document.getElementsByTagName("input");
            for (var ii=0; ii < elements.length; ii++) {
            if (elements[ii].type == "text") {
                elements[ii].value = "";
            }
            }
            
            document.querySelector(".brutto").innerHTML = 0,00;
            document.querySelector(".verot").innerHTML = 0,00;
            document.querySelector(".netto").innerHTML = 0,00;
        }});

    
    

   
        