
function higherOrder(callBack){
    callBack();
}

function callBack(){
    console.log("written calllbakc");
}

higherOrder(callBack);