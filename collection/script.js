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
// 指定したインデックスの項目を削除
cities = ["東京", "大阪", "仙台", "札幌"];
const index = cities.indexOf("大阪");
cities.splice(index, 1);
console.log(cities); // [ "東京", "仙台", "札幌" ]
// 文字列を配列に変換する
const data = "札幌,仙台,東京,名古屋,大阪,福岡";
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