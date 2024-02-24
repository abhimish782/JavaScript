/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const date1= new Date();
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    const date2=new Date();
    return (date1-date2)/1000 + " seconds";
}

console.log(calculateTime(10));