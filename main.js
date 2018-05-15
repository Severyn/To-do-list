 var list = document.getElementById("myList");
 var li = list.getElementsByTagName('li');


for (var i = 0; i < li.length; i++) {
      var button = renderCloseButton();
      li[i].appendChild(button);
    };

var closeButtons = document.getElementsByClassName('close');
    
for (var j = 0; j<closeButtons.length; j++) {
   closeButtons[j].onclick = onCloseButtonClick;
   };

list.addEventListener('click', function (event){
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    }
   }, false);
  
function onCloseButtonClick() {
        var button = this;
        var parent = button.parentElement;
        parent.style.display = 'none';
    };
  
function renderCloseButton() {
    var button = document.createElement('BUTTON');
    var cross = document.createTextNode('\u2626') //unicode symwoly rizni
    button.className = 'close';
    button.appendChild(cross);
    return button;
  }

function addNewTask() {
  var li = document.createElement('li'); /*створення li*/
	var input = document.getElementById("myImput").value; //тобто візьми елемент інпут і дані з нього
  var text = document.createTextNode(input);
  li.appendChild(text); /*tekst w li*/
  var button = renderCloseButton();
  button.onclick = onCloseButtonClick;
  li.appendChild(button);
	list.appendChild(li);
    } 