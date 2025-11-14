// argumentsの使用
function params(a,b) {
  console.log(a, b);
}
params(2, 4, 6); // 2 4
params(2); // 2 undefined

// function paramsEx(a, b) {
//   if (arguments.length !== 2) {
//     throw new Error('引数が多いか少ないです。');
//   }
//   console.log(a, b);
// }
// paramsEx(2, 4); // 2 4
// paramsEx(2, 4, 6); // エラー

const paramsEx = (a, b, ...rest) => {
  if (a === undefined || b === undefined || rest.length > 0) {
    throw new Error('引数が多いか少ないです。');
  }
  console.log(a, b);
}
paramsEx(2, 4); // 2 4
paramsEx(2, 4, 6); // エラー
