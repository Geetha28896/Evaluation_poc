// let promise=new Promise((resolve, reject)=>{

//     let x=19;
//     if(x==10){
//         return resolve('X is equal to 10');
//     }
//     reject("X is not equal to 10")
// })
// promise.then(
//     function(value){
//         console.log(value);
//     },
//     function(error){
//         console.log(error)
//     }
// )

function check(){
 return new Promise(resolve=>{
    setTimeout(()=>{
        resolve('hello world');
    }),1000

 })
    
}

async function get(){
    let result= await check()
    console.log(result);
}
//get()


console.log(a)

let a=10;