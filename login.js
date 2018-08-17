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

function checkLogedIn(){
    if(localStorage.nickname == null){
        return;
    }
    else
        window.location = "chat.html";
}

function login(){
    var userId = document.getElementById('uname').value;
    var curPsw = document.getElementById('psw').value;
    
    db.ref('users/' + userId + '/password').once('value').then(function(snapshot) {
        password = snapshot.val();
        
        if (password === curPsw){
            localStorage.nickname = userId;
            window.location = 'chat.html';
        }
        else{
            document.getElementById("error").style.display = "block"
        }   
    });
    
    password = null;
}


function signup(){
    window.location = "signup.html";
}