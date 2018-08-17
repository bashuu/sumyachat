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
var ref = db.ref('chat');
var counter = 0;
document.getElementById('uName').innerHTML = localStorage.nickname;

function checkLogedIn(){
  if(localStorage.nickname == null)
    window.location = "index.html";
  else
    return
}

ref.on('value', function(data){
  var list = [];
  var i = 0;
  list = data.val();
  var list_keys = Object.keys(list);
  if (counter == 0){

    var i = list_keys.length - 8;
    if (list_keys.length <= 8   )
      i = 0;
    
    for (; i < list_keys.length; i++){
      var j = list_keys[i];              
      var p = document.createElement('li');
      var val = document.createTextNode(list[j].text);
      p.appendChild(val);
      var element = document.getElementById('list');
      element.appendChild(p);
    } 
    counter++;

  }else{
    var j = list_keys[list_keys.length - 1];              
    var p = document.createElement('li');
    var val = document.createTextNode(list[j].text);

    p.appendChild(val);
    var element = document.getElementById('list');
    element.appendChild(p)
  }
});

function change(){
  nickname = document.getElementById("nickname").value;
}

function pushdata(x){
  var data = {
    text : x
  }
  // console.log(data);
  ref.push(data);
}

function submit(){
  var x = document.getElementById("text").value;
  counter += 1;
  x = localStorage.nickname + " : " + x;
  pushdata(x);
  document.getElementById("text").value = "";
}

function logout(){
  localStorage.clear();
  window.location = "index.html";
}
