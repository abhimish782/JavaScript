
const fs=require('fs');

function callBackFn(err,data){
    if(err){
        console.log("Coudnt read file")
        return;
    }
    else{
        let result=cleanData(data);
        fs.writeFile("./toBeCleaned.txt",result,(err)=>{
            if(err){
                console.log("Wasnt able to write to file");
            }
        });
    }
}

function cleanData(data){
    let arr=[];
    for(let i=0;i<data.length;i++){
        if(data[i]==' '){
            continue;
        }
        else{
            let str='';
            while(data.charCodeAt(i)>=65&&data.charCodeAt(i)<=90||data.charCodeAt(i)>=97&&data.charCodeAt(i)<=122){
                str+=data[i];
                i++;
            }
            arr.push(str);
        }
    }
    return arr.join(" ");
}

fs.readFile('./toBeCleaned.txt','utf-8',callBackFn);

console.log("File Cleaned");