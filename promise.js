// function myDisplay(some) {
//   console.log(some);
// }


let promise = new Promise((resolve, reject) => {
  let x = 16;
  if (x == 10) {
    resolve("is equal");
  }
  reject("is not equal");
});

promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
