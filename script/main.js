function toggleNav() {
 //If Media Query is true
    if (window.matchMedia("(max-width: 600px)").matches) {
        if  (document.getElementById("mySidebar").style.width == "100%" || document.getElementById("mySidebar").style.width == "600px") {        
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("topheader").style.marginLeft= "0";
        } 
        else {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("topheader").style.marginLeft = "0";
        }
    }
    else{        
        if  (document.getElementById("mySidebar").style.width == "250px") {        
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("topheader").style.marginLeft= "0";
        } 
        else {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("topheader").style.marginLeft = "250px";
        }
    }
}


const x = document.getElementById('ClientsTitle');
x.innerHTML = x.innerHTML.toUpperCase();
x.innerHTML = x.innerHTML.replace('CLIENTES', 'CLIENTES SATISFECHOS');
x.style.color = '#000'/*Transform text in x to uppercase*/

