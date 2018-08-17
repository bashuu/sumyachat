var config = {
    apiKey: "AIzaSyC_ja4BLA-MpOBYWGdOY52XdJ0No7fWE7E",
    authDomain: "sumyachat.firebaseapp.com",
    databaseURL: "https://sumyachat.firebaseio.com",
    projectId: "sumyachat",
    storageBucket: "sumyachat.appspot.com",
    messagingSenderId: "1088077260110"
  };
firebase.initializeApp(config);

var db = firebase.database();
var password = null;

function signup(){
    if (checkUserNameExist()){
        checkPswMatch();
    }
    else{
        document.getElementById("uNameError").style.display = "block";
        return;
    }
    
}

function checkUserNameExist(){
    var userId = document.getElementById('uName').value
    var password
    db.ref('users/' + userId + '/password').once('value').then(function(snapshot) {
        password = snapshot.val();
        console.log(password);
        if (password)
            return false;
        else
            document.getElementById("uNameError").style.display = "block"
    });
    return true;
}

function checkPswMatch(){
    var psw = document.getElementById('psw').value;
    var rPsw = document.getElementById('rPsw').value;
    
    if (psw === rPsw){
        window.location = "chat.html";
        registerUser();
    }
    else{
        document.getElementById("pswError").style.display = "block"
    }
}

function registerUser(){
    var uName = document.getElementById('uName').value;
    var psw = document.getElementById('psw').value;
    
    db.ref('users/' + uName).set({
        password : psw
    });
    localStorage.nickname = uName;
}

function cancel(){
    window.location = "index.html";
}
