const MyPromise = require("./myPromise");

function test() {
  MyPromise.resolve().then(() => {
    console.log(0);
    return MyPromise.resolve(4);
  }).then((res) => {
    console.log(res)
  })
}

// test();
