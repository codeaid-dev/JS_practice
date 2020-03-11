function Person() {
  // Person()の「this」は自分のインスタンスとして定義される。
  this.age = 0;
  this.name = "Hanako";

  var sec = setInterval(function growUp() {
    // growUp()関数の「this」はグローバルオブジェクトとして定義される。
    this.age++;
   console.log(this.age);
   if (this.age > 2) {
     clearInterval(sec);
   }
  }, 1000);
}

var p = new Person();

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwww

function Person() {
  // Person()の「this」は自分のインスタンスとして定義される。
  this.age = 0;
  this.name = "Hanako";

  var sec = setInterval(function () {
    this.age++;
   console.log(this.age);
   if (this.age > 2) {
     clearInterval(sec);
   }
  }, 1000);
}

var p = new Person();

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwww

function Person() {
  // Person()の「this」は自分のインスタンスとして定義される。
  this.age = 0;
  this.name = "Hanako";

  var sec = setInterval(() => {
    this.age++;
   console.log(this.age);
   if (this.age > 2) {
     clearInterval(sec);
   }
  }, 1000);
}

var p = new Person();

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwww

function Person(name, age) {
  // Person()の「this」は自分のインスタンスとして定義される。
  this.name = name;
  this.age = age;

  this.getName = function() {
    console.log(this.name);
  }
}

var a = new Person("あかり", 20);
var b = new Person("ももか", 18);
a.getName();
b.getName();

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwww

function Person(name, age) {
  // Person()の「this」は自分のインスタンスとして定義される。
  this.name = name;
  this.age = age;

  this.getName = function() {
    console.log(this.name);
  }
}
Person.prototype.setName = function(name) {
  this.name = name;
}

var p = new Person("あかり", 20);
p.getName();
p.setName("ももこ");
p.getName();

// wwwwwwwwwwwwwwwwwwwwwwwwwwwwww

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName () {
    console.log(this.name);
  }
}

var a = new Person("あかり", 20);
var b = new Person("ももか", 18);
a.getName();
b.getName();
