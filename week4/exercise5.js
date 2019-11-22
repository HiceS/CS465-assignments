function generateColor(){
    // pretty simple function that is well known to do this
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

document.getElementById("new_color").addEventListener("click", function(){
    var color = generateColor();
    document.getElementById("color").innerHTML = 'Color: ' + color;
    document.body.style.backgroundColor = color;
});