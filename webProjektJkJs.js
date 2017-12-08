function menuRoll() {
    var x = document.getElementById("navigation");
    if (x.className == "topNavigation") {
        x.className += " responsive";
    } else {
        x.className = "topNavigation";
    }
}
