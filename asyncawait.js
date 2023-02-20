function check(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolved")

        },1000)

    });
}

async function get(){
    let result=await check();
console.log(result);
}


get()