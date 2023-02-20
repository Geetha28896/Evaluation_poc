// function rec(num){
//     console.log(num);
//     let val=num-1;
//     if(val>0){
//         rec(val)
//     }

// }
// rec(3)


// function factorial(x){
//     //console.log(typeof x)
//     if(x==0){
//         return 1;
//     }else{
//         return x*factorial(x-1)
//     }
// }

// let num=5;

// if(num>0){
//     let result=factorial(num)
//     //console.log(typeof num)
//     console.log(result);
// }

function factorial(x){
    if(x==0){
        return 1;
    }else{
        return x*factorial(x-1);
    }
}

let nm=5;

if(nm>=1){
    let result=factorial(nm)
    console.log(result)
}