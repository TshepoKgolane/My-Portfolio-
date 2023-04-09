
function myFunction() {
    
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function unAvailable(){
    window.alert('Access Denied,This is for a private client');
}