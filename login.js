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

function login(){
    var userId = document.getElementById('uname').value;
    var curPsw = document.getElementById('psw').value;

    db.ref('usr/' + userId + '/password').once('value').then(function(snapshot) {
    password = snapshot.val();

    if (password === curPsw){
        localStorage.nickname = userId;
        window.location = 'chat.html';
    }
    else
        console.log('error');
    });

    password = null;
}

function signup(){
    var uName = document.getElementById('uname').value;
    var psw = document.getElementById('psw').value;

    db.ref('usr/' + uName).set({
        password : psw
    });
}
