// 指定した範囲で数値の配列を作成
const range = (start, stop, step=1) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

let nums = range(0,5,1);
console.log(nums); // [0, 1, 2, 3, 4]
nums = range(2,10,2);
console.log(nums); // [2, 4, 6, 8]
nums = range(0,10);
console.log(nums); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 角度→ラジアン値
const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

// ラジアン値→角度
const radToDeg = (rad) => {
  return rad / (Math.PI / 180);
};

let num = degToRad(270);
console.log(num); // 270度のラジアン値
num = radToDeg(3.56);
console.log(num); // ラジアン値3.5の角度
