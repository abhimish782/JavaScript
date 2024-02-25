
let counter=0;

function incrementCounter(){
    counter++;
    console.log(counter);
}

let interval=setInterval(incrementCounter,1000);

setTimeout(()=> clearInterval(interval), 6000);
