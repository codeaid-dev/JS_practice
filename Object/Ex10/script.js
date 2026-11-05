class Member {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (!Number.isInteger(value) ||
      value < 0 || value > 120) {
      return;
    }

    this.#age = value;
  }
}

const member = new Member("山田太郎", 25);

console.log(member.name); // 山田太郎
console.log(member.age);  // 25

member.age = 30;
console.log(member.age);  // 30

member.age = 150;
console.log(member.age);  // 30
