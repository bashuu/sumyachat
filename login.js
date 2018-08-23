auth.onAuthStateChanged(function(user) {
    if (user) {
        window.location = "chat.html"
    } 
});

function login(){
    var email = document.getElementById('uname').value;
    var curPsw = document.getElementById('psw').value;
    
    auth.signInWithEmailAndPassword(email, curPsw).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        document.getElementById("error").innerHTML = errorMessage;
        document.getElementById("error").style.display = "block";
      });
}

function signup(){
    window.location = "signup.html";
}


