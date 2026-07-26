/*
  配列から変数へ代入
*/
// const arr = [1,2,3];
// const [n1,n2,n3] = arr;
// console.log(n1,n2,n3); // n1=1, n2=2, n3=3

// let n1,n2,n3;
// [n1,n2,n3] = arr;
// console.log(n1,n2,n3); // n1=1, n2=2, n3=3

// const [n1,n2,n3,n4] = arr;
// console.log(n4); // undefined

// const [n1=100,n2=200,n3=300,n4=400] = arr;
// console.log(n1,n2,n3,n4); // 1,2,3,400

// let n1 = 100;
// let n2 = 200;
// [n1,n2] = [n2,n1];
// console.log(n1,n2); // 200 100

// const arr = [1,2,3,4,5];
// const [n1,n2,...rest] = arr;
// console.log(n1,n2); // 1 2
// console.log(rest); // [3,4,5]

/*
  オブジェクトから変数へ代入
*/
// const obj = {a:1,b:2,c:3};
// console.log(obj); // {a: 1, b: 2, c: 3}
// const {a,b,c} = obj;
// console.log(a,b,c); // 1 2 3
// const {d,e,f} = obj;
// console.log(d,e,f); // undefined undefined undefined

// let a,b,c;
// ({a,b,c} = obj);
// console.log(a,b,c); // 1 2 3

// const {a:x,b:y,c:z} = obj;
// console.log(x,y,z); // 1 2 3

// const {a:x=10,b:y=20,c:z=30,d:w=40} = obj;
// console.log(x,y,z,w); // 1 2 3 40

// const obj = {a:1,b:2,c:3,d:4,e:5};
// const {a,b,...rest} = obj;
// console.log(a,b); // 1 2
// console.log(rest); // {c: 3, d: 4, e: 5}

// const [n1,n2,n3] = arr;
// console.log(n1,n2,n3); // n1=1, n2=2, n3=3
// n1 = 5; // TypeError

// let [n1,n2,n3] = arr;
// console.log(n1,n2,n3); // n1=1, n2=2, n3=3
// n1 = 5; // n1=5
// console.log(n1); // 5

const pc = [
  {
    maker: 'DELL',
    spec: {
      cpu: 'Intel Core Ultra X7',
      memory: '32GB',
      storage: '512GB'
    },
    type: 'NotePC'
  },
  {
    maker: 'HP',
    spec: {
      cpu: 'AMD Ryzen 7',
      memory: '16GB',
      storage: '256GB'
    },
    type: 'DeskTopPC'
  }
]

for (const {
  maker: m,
  spec: {cpu: c}
} of pc) {
  console.log(`Maker: ${m}, CPU: ${c}`);
}
