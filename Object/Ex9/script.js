class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    throw new Error("getArea()を実装してください");
  }

  display() {
    console.log(`${this.name}の面積：${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("四角形");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("円");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);

rectangle.display(); // 四角形の面積：20
circle.display();    // 円の面積：約28.27