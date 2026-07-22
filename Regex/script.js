const str = 'abcdefg';
const reptxt = 'xxx'; // 置き換える文字列
const findtxt = /cde/; // 照合するパターン（正規表現リテラル）
const result = str.replace(findtxt, reptxt); // 文字列の置き換え
console.log(result);

const str = 'abcdddddddefg';
const reptxt = 'xxx'; // 置き換える文字列
const findtxt = /cd+e/; // 照合するパターン（正規表現リテラル）
const result = str.replace(findtxt, reptxt); // 文字列の置き換え
console.log(result);

const str = 'abcdddddddefg';
const reptxt = 'xxx'; // 置き換える文字列
const findtxt = /cd*e/; // 照合するパターン（正規表現リテラル）
const result = str.replace(findtxt, reptxt); // 文字列の置き換え
console.log(result);

// gフラグがない場合
const str = 'abcdefcdefg';
const reptxt = 'xxx';
const findtxt = /cde/;
const result = str.replace(findtxt, reptxt);
console.log(result);

// gフラグがない場合
const str = 'abcdefcdefg';
const reptxt = 'xxx';
const findtxt = /cde/g;
const result = str.replace(findtxt, reptxt);
console.log(result);
