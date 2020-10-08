// JavaScript練習問題
// 解答例

/***** Q1 *****/
let scope = () => {
  let x = 0;
  console.log(x); // (a)
  let x = 1;
  console.log(x); // (b)
  if (true){
    let x = 3;
    let y = 'a';
    console.log(x); // (c)
  }
  console.log(x); // (d)
  console.log(y); // (e)
}
 
var scope2 = () => {
  var x = 0;
  console.log(x); // (f)
  var x = 1;
  console.log(x); // (g)
  if (true){
    var x = 3;
    var y = 'a';
    console.log(x); // (h)
  }
  console.log(x); // (i)
  console.log(y); // (j)
}
// (a) 0 (b) エラー (c) 3 (d) 0 (e) エラー
// (f) 0 (g) 1 (h) 3 (i) 3 (j) "a"

// 税込み金額表示
let calcTax = (name, bill) => {
  let costs = bill * 1.10;
  let msg = `${name}様
ご指定の金額は税込みで${costs}円です。`;
  return msg;
};

console.log( calcTax('山田', 500) );

// 複数人の税込み金額表示
let data = 
          [{name:'山田', bill:500},
          {name:'鈴木', bill:2500}];

for (let person of data) {
  console.log( calcTax(person['name'], person['bill']) );
}

// フィールドに入力したテキストを表示
/*
<body>
<h1>JS練習問題</h1>
<input type="text">
<button>実行</button>
<p>結果表示</p>
<script>
  let ipt = document.querySelector('input');
  let btn = document.querySelector('button');
  let elem = document.querySelector('p');
  btn.addEventListener('click',()=>{
    elem.innerText=ipt.value;
  });
</script>
</body>
*/

// フィールドに入力したテキストを数値だけ表示
/*
<body>
<h1>JS練習問題</h1>
<input type="text">
<button>実行</button>
<p>結果表示</p>
<script>
  let ipt = document.querySelector('input');
  let btn = document.querySelector('button');
  let elem = document.querySelector('p');
  btn.addEventListener('click',()=>{
    if (isNaN(ipt.value)) {
      elem.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
    } else {
      elem.innerText=ipt.value;
    }
  });
</script>
</body>
*/

// 電車問題
let station = prompt("1.A駅 2.B駅 3.C駅 4.D駅 5.E駅\n行き先の駅を1, 2, 3, 4, 5から選んでください");

if (!isNaN(station)) {
  station = parseInt(station);
} else {
  alert("数値を入力してください");
}

let type;
if (station == 1 || station == 3 || station == 4) {
  type = "快速";
}else if (station == 2) {
  type = "快速・急行";
} else if (station == 5) {
  type = "快速・急行・特急";
} else {
  alert("その駅はありません");
}
if (station >= 1 && station <= 5) {
  alert("その駅には" + type + "の電車が停まります");
}
/*
<body>
<h1>JS練習問題</h1>
  <p>1.A駅 2.B駅 3.C駅 4.D駅 5.E駅<br>行き先の駅を1, 2, 3, 4, 5から選んでください</p>
<input type="text">
<button>実行</button>
<p id="answer">結果表示</p>
<script>
  let ipt = document.querySelector('input');
  let btn = document.querySelector('button');
  let elem = document.querySelector('#answer');
  btn.addEventListener('click',()=>{
    if (isNaN(ipt.value)) {
      elem.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
    } else {
      let type;
      let station = ipt.value;
      if (station == 1 || station == 3 || station == 4) {
        type = "快速";
      }else if (station == 2) {
        type = "快速・急行";
      } else if (station == 5) {
        type = "快速・急行・特急";
      } else {
        elem.innerText = "その駅はありません";
      }
      if (station >= 1 && station <= 5) {
        elem.innerText = "その駅には" + type + "の電車が停まります";
      }
    }
  });
</script>
</body>
*/

// 反転しても読める漢字
/*
<body>
  <h1>JS練習問題</h1>
  <p>反転しても意味の通る漢字です。<br>反転ボタンを押すと漢字が反転します。</p>
  <p style="font-size:40px;"><span id="one">社</span><span id="two">会</span></p>
  <button>反転</button>
  <script>
    let one = document.querySelector('#one');
    let two = document.querySelector('#two');
    let btn = document.querySelector('button');
    btn.addEventListener('click',()=>{
      let w1 = one.innerText;
      let w2 = two.innerText;
      one.innerText = w2;
      two.innerText = w1;
    });
 </script>
</body>
*/

// 指定した横幅と縦幅で○と✕を並べる
/*
<body>
<h1>JS練習問題</h1>
<label for="yoko">横幅</label>
<input type="text" id="yoko">
<label for="tate">縦幅</label>
<input type="text" id="tate">
<button>表示</button>
<p id="answer">結果表示</p>
<script>
  let yoko = document.querySelector('#yoko');
  let tate = document.querySelector('#tate');
  let btn = document.querySelector('button');
  let elem = document.querySelector('#answer');
  btn.addEventListener('click',()=>{
    if (isNaN(yoko.value) || isNaN(tate.value)) {
      elem.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
    } else {
      let tile = ['○', '✕'];
      let index = 1;
      let ans = "";
      for (let i = 0; i < tate.value; i++) {
        index = 1 - index;
        for (let j = 0; j < yoko.value; j++) {
          if (j % 2 == 0) {
            ans += tile[index];
          } else {
            ans += tile[1 - index];
          }
        }
        ans += '<br>';
      }
      elem.innerHTML = ans;
    }
  });
</script>
</body>
*/

/*
<head>
  <style>
    #result {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      margin: 10px;
      font-size: 40px;
    }
  </style>
</head>
<body>
<h1>JS練習問題</h1>
<button>占う</button>
<div id="result"></div>
<script>
  let btn = document.querySelector('button');
  let elem = document.querySelector('#result');
  btn.addEventListener('click',()=>{
    let uranai = Math.floor(Math.random() * 10);
    if (uranai == 0) {
      elem.setAttribute('style', 'background-color:blue');
      elem.innerText = '大吉';
    } else if (uranai >= 1 && uranai <= 3) {
      elem.setAttribute('style', 'background-color:green');
      elem.innerText = '吉';
    } else if (uranai >= 4 && uranai <= 7) {
      elem.setAttribute('style', 'background-color:yellow');
      elem.innerText = '凶';
    } else if (uranai >= 8 && uranai <= 9) {
      elem.setAttribute('style', 'background-color:red');
      elem.innerText = '大凶';
    }
  });
</script>
</body>
*/