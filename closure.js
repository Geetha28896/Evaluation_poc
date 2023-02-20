//let global="Geetha"
// function add(){
//     let b=10;
//     console.log(b)

//   function val(){

//     var a=20;
//     console.log(a);
//  }


// val()
// }
// add()



// function abc(){
//     let a = 10
//     console.log(a)

//     function my(){
//     //if (a == 10){
//         var b = 20
//         //console.log(b)
//     //}
//      console.log(b)
// }
// my();
// }
// //}
// abc()


// function global(){
//     let x=4;
//     function local(){
//         let y=10;
//         console.log("result "+(x+y));
//     }
//     local();
// }
// global()

function abc(){
    var x=10;

    function abcd(){
        var y=20;
        return y;
    }

//    console.log( abcd());
//    console.log(this)
    
}

//console.log(abc());
abc.call(abcd)
