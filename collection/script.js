const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping);
console.log(shopping.length); // 5
// 配列は型の違うデータを混在させることができる
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
console.log(sequence);
console.log(random);
// 配列の項目を取得し変更する
console.log(shopping[0]);
shopping[0] = "タヒーニ";
console.log(shopping);
// 2次元配列のアクセス
console.log(random[2][2]);
// 配列内の項目のインデックス検索
const birds = ["オウム", "鷹", "フクロウ"];
console.log(birds.indexOf("フクロウ")); // 2
console.log(birds.indexOf("ウサギ")); // -1
// 項目を末尾に追加
let cities = ["東京", "大阪"];
cities.push("広島");
console.log(cities); // [ "東京", "大阪", "広島" ]
cities.push("福岡", "鹿児島");
console.log(cities); // [ "東京", "大阪", "広島", "福岡", "鹿児島" ]
// push()メソッドは配列を更新した後の長さを返す
cities = ["東京", "大阪"];
const newLength = cities.push("神戸");
console.log(cities); // [ "東京", "大阪", "神戸" ]
console.log(newLength); // 3
// 項目を先頭に追加
cities = ["東京", "大阪"];
cities.unshift("札幌");
console.log(cities); // [ "札幌", "東京", "大阪" ]
// 末尾の項目を削除
cities = ["東京", "大阪"];
cities.pop();
console.log(cities); // [ "東京" ]
// pop()メソッドは削除した項目を返す
cities = ["東京", "大阪"];
const removedCity = cities.pop();
console.log(removedCity); // "大阪"
// 先頭の項目を削除
cities = ["東京", "大阪"];
cities.shift();
console.log(cities); // [ "大阪" ]
// delete演算子を使って項目を削除
let fruits = ['リンゴ', 'メロン', 'イチゴ', 'スイカ'];
delete fruits[1];
console.log(fruits[2]); // イチゴ
console.log(fruits[1] === undefined); // true
// 指定したインデックスの項目を削除
cities = ["東京", "大阪", "仙台", "札幌"];
let index = cities.indexOf("大阪");
cities.splice(index, 1);
console.log(cities); // [ "東京", "仙台", "札幌" ]
// 指定位置に項目を挿入
cities = ["東京", "大阪", "仙台", "札幌"];
cities.splice(2, 0, "福岡");
console.log(cities); // ["東京","大阪","福岡","仙台","札幌"]
cities.splice(2, 0, "京都","名古屋");
console.log(cities); // ["東京","大阪","京都","名古屋","福岡","仙台","札幌"]
// 文字列を配列に変換する
let data = "札幌,仙台,東京,名古屋,大阪,福岡";
cities = data.split(",");
console.log(cities); // ["札幌","仙台","東京","名古屋","大阪","福岡"]
// 配列を文字列に変換する
cities = ["東京", "大阪", "仙台", "札幌"];
const commaSeparated = cities.join(",");
console.log(commaSeparated); // 東京,大阪,仙台,札幌
const hiragana = ["あ","い","う","え","お"];
const agyo = hiragana.join("");
console.log(agyo); // あいうえお
// toString()を使っても文字列に変換できる。ただし区切り文字はカンマ(,)のみとなる
const dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
console.log(dogNames.toString()); // ポチ,ハチ,タロウ,モコ
// 配列と配列を結合する
const fruits1 = ["Apple", "Orange", "Melon"];
const fruits2 = fruits1.concat(["Peach", "Grapes"]);
console.log(fruits2); // ["Apple","Orange","Melon","Peach","Grapes"]
const fruits3 = fruits1.concat("Peach", ["Grapes", "Cherries"]);
console.log(fruits3); // ["Apple","Orange","Melon","Peach","Grapes","Cherries"]
// 配列を複製(シャローコピー)
const fruits4 = fruits1.concat();
console.log(fruits4); // ["Apple","Orange","Melon"]
const fruits5 = ["Apple", ["Orange", "Melon"]];
const fruits6 = fruits5.concat();
console.log(fruits6); // ["Apple",["Orange","Melon"]]
fruits6[1][0] = "Peach";
console.log(fruits5); // ["Apple",["Peach","Melon"]]
console.log(fruits6); // ["Apple",["Peach","Melon"]]
// 配列を複製(ディープコピー)
const ingredientsList = ["Apple", ["Orange", "Melon"]];
const ingredientsListDeepCopy1 = JSON.parse(JSON.stringify(ingredientsList));
ingredientsListDeepCopy1[1][0] = "Peach";
console.log(ingredientsList); // ["Apple",["Orange","Melon"]]
console.log(ingredientsListDeepCopy1); // ["Apple",["Peach","Melon"]]

const ingredientsListDeepCopy2 = structuredClone(ingredientsList);
ingredientsListDeepCopy2[1][0] = "Peach";
console.log(ingredientsList); // ["Apple",["Orange","Melon"]]
console.log(ingredientsListDeepCopy2); // ["Apple",["Peach","Melon"]]
// 配列のソートと反転
let nums = [5,7,2,4,9,1,3];
nums.sort();
nums.reverse();
console.log(nums);
// #1
const team_1 = ['阪神', '巨人', 'ヤクルト'];
const team_2 = ['DeNA', '中日', '広島'];
const team_3 = team_1.concat(team_2);
console.log(team_3);
// #2
const flowers = ["さくら", "きく", "ゆり", "ばら", "うめ"];
console.log(flowers.join(" "));
// #3
const country = "東京,ニューヨーク,ロンドン,パリ,ローマ";
const countries1 = country.split(",");
const countries2 = countries1.concat();
countries2[1] = 'マドリード';
countries2[3] = 'ベルリン';
console.log(countries1);
console.log(countries2);
// #4
let number = ['one', 'two', 'three'];
number.push('four');
console.log(number);
// #5
number = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
const res1 = number.slice(0,3);
const res2 = number.slice(2,5);
console.log(res1);
console.log(res2);
// #6
const material = ['いち', 'にー', 'なな', 'さん', 'よん'];
index = material.indexOf('なな');
material.splice(index, 1);
console.log(material);
material.splice(-2);
console.log(material);
// #7
const box1 = ['one', 'two', 'three', 'eight'];
const box2 = ['five', 'six', 'seven', 'four'];
const b1 = box1.pop();
const b2 = box2.pop();
box1.push(b2);
box2.push(b1);
console.log(box1);
console.log(box2);
// #8
nums = [5,7,2,4,9,1,3];
nums.sort();
console.log(nums);
nums.reverse();
console.log(nums);
// #9
fruits = [
  ['Banana', 'Peach'],
  ['Orange', 'Grape'],
  ['Apple', 'Cherry']
];
console.log(fruits[0][0] + ',' + fruits[2][1]);
// #10
nums = [10, 20, [300, 400, [5000, 6000], 500], 30, 40];
nums[2][2].push(7000);
console.log(nums);
// #11
nums = [10, 20, [300, 400, [5000, 6000], 500], 30, 40];
nums[2][2].shift();
console.log(nums);
// #12
nums = [10, 20, [10, 20, [10, 20], 30], 30, 40];
nums[2].splice(1,1);
console.log(nums);
// #13
const alph = ['a','b',['c',['d','e',['f','g'],'k'],'l'],'m','n'];
alph[2][1][2].push('h','i','j');
console.log(alph);
// #14
const str = '1,2,3,454,86,ab,cd,ef';
data = str.split(',');
index = data.indexOf('86');
data[index] = 'Hello';
console.log(data);
// #15
const word = 'abcdefgh';
const words = word.split('');
words.splice(0,4);
words.unshift('1','2','3','4');
const res = words.join('')
console.log(res);