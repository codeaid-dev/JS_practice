const score = {
  mathematics: 65,
  english: 70,
  physics: 80,
  get_average() {
    return Math.floor((this.mathematics+this.english+this.physics)/3);
  }
}
console.log(`数学=${score.mathematics}`);
console.log(`英語=${score.english}`);
console.log(`物理=${score.physics}`);
console.log(`平均は${score.get_average()}`);
