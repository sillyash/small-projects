let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
}

function listLength(){
	return item.length;
}

function inputIsEmpty() {
    return input.value === null || input.value.match(/^ *$/) !== null;
}

function createListElement() {
    let li = document.createElement("li");
    
    let html_checkbox = '<label class="container"><input type="checkbox"><div class="checkmark"></div></label>';
    appendHtml(li, html_checkbox);
    let checkbox = li.firstChild.firstChild;
    
    let text = document.createTextNode(input.value);
    input.value = "";

    let textElem = document.createElement("p");
    textElem.appendChild(text);
    
    li.appendChild(textElem);
    ul.appendChild(li);

    let btnDel = document.createElement("button");
    btnDel.append("X");
    li.appendChild(btnDel);

	function crossOut() {
        li.classList.toggle("done");
	}

	function deleteListItem() {
        ul.removeChild(li);
	}

    btnDel.addEventListener("click", deleteListItem);
    checkbox.addEventListener("click", crossOut);
}

function addListAfterClick() {
    if (inputIsEmpty()) return;
    createListElement();
}

function addListAfterKeypress(event) {
    if (inputIsEmpty()) return;
    if (event.code == 'Enter') createListElement();
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);
