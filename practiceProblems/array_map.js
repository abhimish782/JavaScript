
// function mapArray(arr,callBack){
//     for(let i=0;i<arr.length;i++){
//         callBack(arr,i);
//     }
//     return arr;
// }

// function sqared(arr,i){
//     arr[i]=arr[i]*arr[i];
//     return;
// }

// let array=[1,2,3,4,5,6,7];
// let ans=mapArray(array,sqared);
// console.log(ans);


function mapArray(arr,callback){
    return arr.map(callback);
}

function sqaured(element){
    return element*element;
}
let arr=[1,2,3,4,5];
console.log(mapArray(arr,sqaured));

