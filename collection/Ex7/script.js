const box1 = ['one', 'two', 'three', 'eight'];
const box2 = ['five', 'six', 'seven', 'four'];
const b1 = box1.pop();
const b2 = box2.pop();
box1.push(b2);
box2.push(b1);
console.log(box1);
console.log(box2);
