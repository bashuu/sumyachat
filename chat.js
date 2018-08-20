var config = {
  apiKey: "AIzaSyC_ja4BLA-MpOBYWGdOY52XdJ0No7fWE7E",
  authDomain: "sumyachat.firebaseapp.com",
  databaseURL: "https://sumyachat.firebaseio.com",
  projectId: "sumyachat",
  storageBucket: "sumyachat.appspot.com",
  messagingSenderId: "1088077260110"
};
firebase.initializeApp(config);

var input = document.getElementById("text");
var db = firebase.database();
var ref = db.ref('chat/' + 'messeges');
var counter = 0;
var chatbox = document.getElementById("chatbox");
var count_2 = 0;

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
      var p = document.createElement('p');
      var val = document.createTextNode(list[j].text);
      p.appendChild(val);
      var element = document.getElementById('list');
      element.appendChild(p);
      chatbox.scrollTop = chatbox.scrollHeight;
      document.getElementsByTagName("P")[count_2].setAttribute("class", "chatText"); 
      count_2++;
    } 
    counter++;

  }else{
    var j = list_keys[list_keys.length - 1];              
    var p = document.createElement('P');
    var val = document.createTextNode(list[j].text);
    p.appendChild(val);
    var element = document.getElementById('list');
    element.appendChild(p)
    chatbox.scrollTop = chatbox.scrollHeight;
    document.getElementsByTagName("P")[count_2].setAttribute("class", "chatText"); 
    count_2++;
  }
});

function pushdata(x){
  var data = {
    text : x
  }
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

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
}); 
