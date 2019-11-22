document.getElementById("submit").addEventListener("click", function(){
    console.log('name: ' + document.getElementById("name").value)
    console.log('email: ' + document.getElementById("email").value)
    console.log('message: ' + document.getElementById("message").value)
});

document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
});