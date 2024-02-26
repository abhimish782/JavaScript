let date=new Date();
function higherOrderAsyn(callBack){
    
    setTimeout(callBack,date.getUTCDate()*1000);
}

function callBack(){
    console.log("I am called after"+date.getUTCDate()+"sec");
}
higherOrderAsyn(callBack);

