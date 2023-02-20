let obj={
    fName:"geetha",
    lName:"thanapal",
    fullName:function(){
        return this.fName+" "+this.lName;
    }
    // address:{
    //     no:101,
    //     area: "south mada street",
    //     state: "Tamilnadu"
    // }
}

//console.log(obj.fullName())

//let txt="";


function print(data){
    for(let x in data){
        if(typeof data[x]=="String"){
            debugger;
            print(data[x])
        }else{
        console.log(data[x])
            
        }
        
    }
}

print(obj)
//console.log(txt);

