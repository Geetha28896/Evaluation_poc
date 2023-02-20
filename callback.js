// function add(a,b,callback){
//     c=a+b;
//     callback(c)
// }
// let a=10;
// let b=10;

// add(a,b,(c)=>{
//     console.log("result "+c);
// })

function add(a,b,callback){
    c=a+b;
    callback(c)
}

// let a=10;
// let b=10;

add(10,10,(c)=>{
    console.log('result'+c);
})