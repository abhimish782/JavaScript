
let hours=0;
let min=0;
let sec=0;

function incrementClock(){
    sec++;
    if(sec>=60){
        min++;
        sec=0;
    }
    if(min>=60){
        hours++;
        min=0;
    }
    console.log(hours+":"+min+":"+sec);
}


let interVal=setInterval(incrementClock,1000);
