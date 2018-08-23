function signup(){
    checkPswMatch()
}

function checkPswMatch(){
    var nickname = document.getElementById('uName').value
    var psw = document.getElementById('psw').value;
    var rPsw = document.getElementById('rPsw').value;
    
    if (psw === rPsw){
        registerUser();
    }else if(nickname == null){
        document.getElementById("error").innerHTML = "enter Nickname"
        document.getElementById("error").style.display = "block"
    }
    else {
        document.getElementById("error").innerHTML = "Password doesn't match"
        document.getElementById("error").style.display = "block"
    }
}

function registerUser(){
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    auth.createUserWithEmailAndPassword(email, psw).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        document.getElementById("error").innerHTML = errorMessage;
        document.getElementById("error").style.display = "block";
    })
}

function cancel(){
    window.location = "index.html";
}

auth.onAuthStateChanged(function(user) {
    if (user) {
        nickname = document.getElementById('uName').value;
        db.ref('users/' + user.uid).set({
            nickname : nickname
        })
        window.location = "chat.html";
    } else {
      // No user is signed in.
    }
});



