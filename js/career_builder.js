//This function turns the background area to the target color.
function bgBlack(obj, targetColor) {
    obj.style.backgroundColor = targetColor;
}


//Once the target is triggered, the obj's color would be changed to the
//target color.
function fontColor(obj, targetColor) {
    obj.style.color = targetColor;
}


//For the text-input window, if the value of this obj equls to the "textContent"
//passed by the customer, once your mouse focus on the window and ready to type in,
//the text window will be initialized to empty.
function textInit(obj, textContent) {
    if(obj.value===(textContent)){
        obj.value = "";
    }

}

//If you do not type anything in the text area, once out of focus, the text area
//will be filled with the "textContent"
function emptyReverse(obj, textContent) {
    if(!obj.value){
        obj.value = textContent;
    }
}