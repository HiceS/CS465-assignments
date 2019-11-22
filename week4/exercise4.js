document.getElementById("height").innerHTML = 'Height: ' + window.innerHeight;
document.getElementById("width").innerHTML = 'Width: ' + window.innerWidth;

window.onresize = function(event) {
    document.getElementById("height").innerHTML = 'Height: ' + window.innerHeight;
    document.getElementById("width").innerHTML = 'Width: ' + window.innerWidth;
};