// 配列もオブジェクト
const nums = [1,2,3];
console.log(nums.length); // 3
nums.push(4);
console.log(nums); // [1,2,3,4]

// 最小限のオブジェクト
const person = {};
console.log(typeof person); // object

// オブジェクトにプロパティとメソッドを追加
const person = {};
person.name = 'Michael';
person.greet = ()=>{console.log('Hello!')};
console.log(person.name); // Michael
person.greet(); // Hello!

// プロパティとメソッドを定義
const person = {
  name: 'Michael',
  greet() {
    console.log('Hello!');
  }
}
console.log(person.name); // Michael
person.greet(); // Hello!

// プロパティの値
const person = {
  name: ['Michael', 'Jackson']
}
console.log(person.name[0]); // Michael
console.log(person.name[1]); // Jackson

// プロパティの値
const person = {
  name: {
    first: 'Michael',
    last: 'Jackson'
  }
}
console.log(person.name.first); // Michael
console.log(person.name.last); // Jackson

// ブラケット記法
const person = {
  name: 'Michael'
};
console.log(person['name']); // Michael

const person = {
  name: {
    first: 'Michael',
    last: 'Jackson'
  }
};
console.log(person['name']['first']); // Michael
console.log(person['name']['last']); // Jackson

// this
const person = {
  name: 'Michael',
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
};
person.greet(); // Hello! I'm Michael.

// class
class Person {
  name = 'Michael';
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
const michael = new Person();
console.log(typeof michael); // object
console.log(michael.name); // Michael
michael.greet(); // Hello! I'm Michael.

// constructor
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
const person1 = new Person('Michael');
const person2 = new Person('Prince');
person1.greet(); // Hello! I'm Michael.
person2.greet(); // Hello! I'm Prince.

// 継承
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
class Artist extends Person {
  genre;
  constructor(name, genre) {
    super(name);
    this.genre = genre;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.genre} musician.`);
  }
}
const person1 = new Artist('Michael', 'Pop');
const person2 = new Artist('Prince', 'Soul');
person1.greet(); // Hello! I'm Michael and I'm Pop musician.
person2.greet(); // Hello! I'm Prince and I'm Soul musician.
person1.genre = 'Country';
person1.greet(); // Hello! I'm Michael and I'm Country musician.

// カプセル化
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
class Artist extends Person {
  #genre;
  constructor(name, genre) {
    super(name);
    this.#genre = genre;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.#genre} musician.`);
  }
}
const person1 = new Artist('Michael', 'Pop');
const person2 = new Artist('Prince', 'Soul');
person1.greet(); // Hello! I'm Michael and I'm Pop musician.
person2.greet(); // Hello! I'm Prince and I'm Soul musician.
person1.#genre = 'Country'; // error

// カプセル化 セッター
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
class Artist extends Person {
  #genre;
  constructor(name, genre) {
    super(name);
    this.#genre = genre;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.#genre} musician.`);
  }
  setGenre(genre) {
    if (this.name === 'Prince') {
      this.#genre = genre;
      return true;
    } else {
      return false;
    }
  }
}
const person1 = new Artist('Michael', 'Pop');
const person2 = new Artist('Prince', 'Soul');
person1.greet(); // Hello! I'm Michael and I'm Pop musician.
person2.greet(); // Hello! I'm Prince and I'm Soul musician.
if (person1.setGenre('Rock')) {
  person1.greet();
} else {
  console.log('fail to change genre.');
}
if (person2.setGenre('Funk')) {
  person2.greet();
} else {
  console.log('fail to change genre.');
}

// カプセル化 ゲッター
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
class Artist extends Person {
  #genre;
  constructor(name, genre) {
    super(name);
    this.#genre = genre;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.#genre} musician.`);
  }
  getGenre(genre) {
    return this.#genre;
  }
}
const person2 = new Artist('Prince', 'Soul');
person2.greet(); // Hello! I'm Prince and I'm Soul musician.
console.log(person2.getGenre()); // Soul

// カプセル化 セッター/ゲッター
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
}
class Artist extends Person {
  #genre;
  constructor(name, genre) {
    super(name);
    this.#genre = genre;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.#genre} musician.`);
  }
  set genre(genre) {
    this.#genre = genre;
  }
  get genre() {
    return this.#genre;
  }
}
const person2 = new Artist('Prince', 'Soul');
person2.greet(); // Hello! I'm Prince and I'm Soul musician.
console.log(person2.genre); // Soul
person2.genre = 'Pop';
console.log(person2.genre); // Pop
