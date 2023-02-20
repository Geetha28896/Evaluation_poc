const fs=require("fs")

//const content="Welcome to Quinnox";
fs.writeFile("./test.txt","hi",(err)=>{
    if(err){
        console.log(err);
    }
else{
    console.log(fs.readFileSync("./test.txt","utf8"));
}
})

// const data= fs.readFile('./test.txt',"utf8",(err,data)=>{
//               //{encoding:'utf8', flag:'r'});

//               console.log(data);
// })