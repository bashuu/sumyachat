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
var auth = firebase.auth();
var user;
var nickname;