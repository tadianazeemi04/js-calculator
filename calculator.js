const display = document.getElementById("display");
let resetDisplay = false;

function clearAll(){
    display.value = "";
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = parseFloat(eval(display.value)).toFixed(5); ;
    }
    catch (error) {
        display.value = "Error" ;
        resetDisplay = true ;
    }
}


function addToDisplay(){
    if (resetDisplay) {
        display.value = value;
        resetDisplay = false;
    }
    else {
        display.value += value ;
    }
}