function login(){
    var email = document.getElementById('uname').value;
    var curPsw = document.getElementById('psw').value;
    
    firebase.auth().signInWithEmailAndPassword(email, curPsw).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        document.getElementById("error").innerHTML = errorMessage;
        document.getElementById("error").style.display = "block";
        // ...
      });

}

function signup(){
    window.location = "signup.html";
}

auth.onAuthStateChanged(function(user) {
    if (user) {
        window.location = "chat.html"
    } else {
      // No user is signed in.
    }
});


