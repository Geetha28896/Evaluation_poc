const fs=require('fs')

fs.readFile("C:/Users/geethat1/Documents/test.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})