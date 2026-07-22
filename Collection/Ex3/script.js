const country = "東京,ニューヨーク,ロンドン,パリ,ローマ";
const countries1 = country.split(",");
const countries2 = countries1.concat();
countries2[1] = 'マドリード';
countries2[3] = 'ベルリン';
console.log(countries1);
console.log(countries2);
