// how to write to a file in js 
// the key is to use the fs library

const fs=require('fs');

let  data='Hello World!';

fs.writeFile("./random.txt",data,(err)=>{
    if(err){
        console.log("Couldnt write to the file");
        return ;
    }
});

console.log("Data written to file");