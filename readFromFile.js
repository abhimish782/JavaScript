const fs=require('fs');

// function callbackFn(err, data) {
//     if(err){
//         console.log("Cant read content of file");
//     }
//     else{
//         console.log(data);
//     }
// }

fs.readFile('readingTest.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});