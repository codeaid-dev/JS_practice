const employee = {
  id: 1001,

  name: {
    first: "太郎",
    last: "山田"
  },

  department: "開発部",
  qualifications: ["基本情報技術者"],

  addQualification(qualification) {
    this.qualifications.push(qualification);
  },

  hasQualification(qualification) {
    return this.qualifications.includes(qualification);
  },

  getProperty(propertyName) {
    return this[propertyName];
  }
};

employee.addQualification("応用情報技術者");

console.log(employee.name.first); // 太郎
console.log(employee["name"]["last"]); // 山田
console.log(employee.qualifications);
// ["基本情報技術者", "応用情報技術者"]

console.log(employee.hasQualification("応用情報技術者")); // true

console.log(employee.getProperty("department")); // 開発部
