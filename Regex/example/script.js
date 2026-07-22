const str = 'abcdefg';
const reptxt = 'xxx'; // 置き換える文字列
const findtxt = /cde/; // 照合するパターン（正規表現リテラル）
const result = str.replace(findtxt, reptxt); // 文字列の置き換え
console.log(result);
