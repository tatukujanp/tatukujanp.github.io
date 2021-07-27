

document.getElementById("laske").addEventListener("click", function() {
        let vuokra = document.getElementById("vuokra").value;
        let vastike = document.getElementById("vastike").value;
        let lyhennys = document.getElementById("lyhennys").value;
        let korko = document.getElementById("korko").value;
        let yllattavat = document.getElementById("yllattavat").value;

        let verot = (vuokra-vastike-korko-yllattavat) * 0.3;
        
        let kassavirta = vuokra-vastike-lyhennys-korko-yllattavat
        

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
        

        let verot = (vuokra-vastike-korko-yllattavat) * 0.3;
        
        let kassavirta = vuokra-vastike-lyhennys-korko-yllattavat
        

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

        // ------------------- Modal -------------------------
    
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "flex";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        



        document.getElementById("myBtn").addEventListener("click", function(){
            let vuokra = document.getElementById("vuokra").value;
            let vastike = document.getElementById("vastike").value;
            let lyhennys = document.getElementById("lyhennys").value;
            let korko = document.getElementById("korko").value;
            let yllattavat = document.getElementById("yllattavat").value;


            let verot = (vuokra-vastike-korko-yllattavat) * 0.3;
        
            let kassavirta = vuokra-vastike-lyhennys-korko-yllattavat
            

            document.querySelector(".tbl-brutto").innerHTML = kassavirta.toFixed(2) + " €";
            document.querySelector(".tbl-brutto-v").innerHTML = (kassavirta * 12).toFixed(2) + " €";

            document.querySelector(".tbl-verot").innerHTML = verot.toFixed(2) + " €";
            document.querySelector(".tbl-verot-v").innerHTML = (verot * 12).toFixed(2) + " €";

            document.querySelector(".tbl-netto").innerHTML = (kassavirta - verot).toFixed(2) + " €";
            document.querySelector(".tbl-netto-v").innerHTML = ((kassavirta - verot) * 12).toFixed(2) + " €";

            document.querySelector(".tbl-yllattavat").innerHTML = yllattavat * 1 + " €";
            document.querySelector(".tbl-yllattavat-v").innerHTML = yllattavat * 12 + " €";

            document.querySelector(".tbl-vuokra").innerHTML = vuokra * 1 + " €";
            document.querySelector(".tbl-vuokra-v").innerHTML = vuokra * 12 + " €";

            document.querySelector(".tbl-vastike").innerHTML = vastike * 1 + " €";
            document.querySelector(".tbl-vastike-v").innerHTML = vastike * 12 + " €";

            document.querySelector(".tbl-lyhennys").innerHTML = lyhennys * 1 + " €";
            document.querySelector(".tbl-lyhennys-v").innerHTML = lyhennys * 12 + " €";

            document.querySelector(".tbl-korko").innerHTML = korko * 1 + " €";
            document.querySelector(".tbl-korko-v").innerHTML = korko * 12 + " €";

        })