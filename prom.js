let promise=new Promise((resolve,reject)=>{
    resolve("resolved")
      
})

promise.then(result=>{
    console.log(result);
})