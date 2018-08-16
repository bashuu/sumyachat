var db = firebase.database();
var password = null;
var URl = window.location.href;

function login(){
    var userId = document.getElementById('uname').value;
    var curPsw = document.getElementById('psw').value;

    db.ref('usr/' + userId + '/password').once('value').then(function(snapshot) {
    password = snapshot.val();

    if (password === curPsw){
        console.log(URl);
    }
    else
        console.log(password);
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
