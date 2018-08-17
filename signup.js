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
    if(checkPswMatch()){
        window.location = "chat.html";
        registerUser();
    }
    else{
    }
}

function checkPswMatch(){
    var psw = document.getElementById('psw').value;
    var rPsw = document.getElementById('rPsw').value;
    
    if (psw === rPsw)
    return true;
    
    return false;
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
