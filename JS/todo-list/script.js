var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
	return input.value.length;
} 


function listLength(){
	return item.length;
}


function createListElement() {
	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
	}
	//END STRIKETHROUGH

	// START ADD DELETE BUTTON

	// END ADD DELETE BUTTON

	//ADD CLASS DE  LETE (DISPLAY: NONE)
	function deleteListItem(){
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
}


function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
