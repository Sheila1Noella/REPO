var Mylist = document.getElementsByTagName('LI');
var i;
for(i = 0; i < Mylist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    Mylist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var j;
for(j = 0; j < close.length; j++){
    close[j].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ol');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("You must write something!");
    }
    else{
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value ="";

var span = document.createElement("SPAN");
var txt = document.createTextNode("");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for(l = 0; l < close.length; l++){
    close[l].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
}

