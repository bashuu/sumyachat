var input = document.getElementById("text");
var ref = db.ref('chat/' + 'messeges');
var counter = 0;
var chatbox = document.getElementById("chatbox");
var count_2 = 0;

auth.onAuthStateChanged(user => {
  if (user){
    db.ref('users/' + user.uid  + '/nickname').once('value').then(function(snapshot){
      nickname = snapshot.val();
      document.getElementById("uName").innerHTML = nickname;
    });
  }else{
    window.location = "index.html"
  }
});

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
  var x = input.value;
  counter += 1;
  x = nickname + " : " + x;
  pushdata(x);
  input.value = "";
}

function logout(){
  auth.signOut();
  window.location = "index.html";
}

function load() {
  var load = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
}); 
