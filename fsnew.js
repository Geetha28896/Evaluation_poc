const fs=require('fs')

const folderName='rough'

if(!fs.existsSync(folderName)){
    fs.mkdirSync(folderName)
    fs.writeFileSync("rough/sample.txt","hi Team")
}
else{
    console.log(folderName+" cannot create a folder same name!! change folder name");
    
}

// function add(){
//     let a=10;
//     console.log(a);
//     if(a==10){
//         let b=20;
//         console.log(b)
//     }
//     //console.log(b)
// }
// //console.log(b)

// add()

function print(callback) {
  //console.log(some)

  callback();
}

//    let val=function print(c){

//       // print("poo")

//      console.log(c)

//    }

function myLast() {
  console.log("Geetha");
}

//print(myLast)

/*

var fs = require("fs");

var fileName = fs.existsSync("./model3");

if (folderExists) {
  var fileexists = fs.exists("./model3/sample.txt");

  if (fileexists) {
    fs.unlinkSync("./model3/sample.txt");

    fs.rmdirSync("./model");
    
  }
  console.log("file already exist");
} else {
  fs.mkdirSync("./model3");

  fs.writeFileSync("./model3/sample.txt", "hi Team");
}

*/
