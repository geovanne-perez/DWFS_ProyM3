function toggleNav() {
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