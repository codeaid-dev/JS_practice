function test(){
  var x = 0;
  console.log(x); //0
  var x = 1;
  console.log(x); //1
  x = 2;
  console.log(x); //2
  if (true){
    console.log(x) //2
    var x = 3;
    var y = 'a';
  }
  console.log(x); //3
  console.log(y); //a
}
test();

function test2(){
  let x = 0;
  console.log(x); //0
  let x = 1;
  console.log(x); //error
  x = 2;
  console.log(x); //2
  if (true){
    let x = 3;
    let y = 'a';
    console.log(x) //3
  }
  console.log(x); //2
  console.log(y); //error
}
test2();

const x = 123;
x = 456; // error

const VAT = 1.08;
let goods, price;
if (true) {
  goods = 100;
  price = goods * VAT;
}
console.log(price);

let foo = (param) => {
  console.log(param);
}
foo(1);
