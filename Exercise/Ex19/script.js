const tohoku = [
{id:1, name:'北海道'},
{id:2, name:'青森県'},
{id:3, name:'岩手県'},
{id:4, name:'宮城県'},
{id:5, name:'秋田県'},
{id:6, name:'山形県'},
{id:7, name:'福島県'}
];
const kanto = [
{id:1, name:'茨城県'},
{id:2, name:'栃木県'},
{id:3, name:'群馬県'},
{id:4, name:'埼玉県'},
{id:5, name:'千葉県'},
{id:6, name:'東京都'},
{id:7, name:'神奈川県'}
];
const hokuriku = [
{id:1, name:'新潟県'},
{id:2, name:'富山県'},
{id:3, name:'石川県'},
{id:4, name:'福井県'}
];
const tokai = [
{id:1, name:'山梨県'},
{id:2, name:'長野県'},
{id:3, name:'岐阜県'},
{id:4, name:'静岡県'},
{id:5, name:'愛知県'},
{id:6, name:'三重県'}
];
const kinki = [
{id:1, name:'滋賀県'},
{id:2, name:'京都府'},
{id:3, name:'大阪府'},
{id:4, name:'兵庫県'},
{id:5, name:'奈良県'},
{id:6, name:'和歌山県'}
];
const nishinihon = [
{id:1, name:'鳥取県'},
{id:2, name:'島根県'},
{id:3, name:'岡山県'},
{id:4, name:'広島県'},
{id:5, name:'山口県'}
];
const shikoku = [
{id:1, name:'徳島県'},
{id:2, name:'香川県'},
{id:3, name:'愛媛県'},
{id:4, name:'高知県'}
];
const kyushu = [
{id:1, name:'福岡県'},
{id:2, name:'佐賀県'},
{id:3, name:'長崎県'},
{id:4, name:'熊本県'},
{id:5, name:'大分県'},
{id:6, name:'宮崎県'},
{id:7, name:'鹿児島県'},
{id:8, name:'沖縄県'}
];

const region = document.getElementsByName('region');
const pref = document.querySelector('#pref');
pref.innerHTML = '<option value="">選択してください</option>';
for (let elem of kinki) {
  pref.innerHTML += `<option value="${elem.id}">${elem.name}</option>`;
}

let select = 'kinki';
for (let i=0; i<region.length; i++) {
  region[i].addEventListener('click', ()=>{
    pref.innerHTML = '<option value="">選択してください</option>';
    if (region[i].checked) {
      select = region[i].value;
      if (select == "kinki") {
        for (let elem of kinki) {
          pref.innerHTML += `<option value="${elem.id}">${elem.name}</option>`;
        }
      } else if (select == "nishinihon") {
        for (let elem of nishinihon) {
          pref.innerHTML += `<option value="${elem.id}">${elem.name}</option>`;
        }
      } else if (select == "shikoku") {
        for (let elem of shikoku) {
          pref.innerHTML += `<option value="${elem.id}">${elem.name}</option>`;
        }
      } else if (select == "kyushu") {
        for (let elem of kyushu) {
          pref.innerHTML += `<option value="${elem.id}">${elem.name}</option>`;
        }
      }
    }
  });
}

pref.addEventListener('change', (event)=>{
  let target;
  if (select == "kinki") {
    target = kinki.find((value)=> value.id == event.target.value);
  } else if (select == "nishinihon") {
    target = nishinihon.find((value)=> value.id == event.target.value);
  } else if (select == "shikoku") {
    target = shikoku.find((value)=> value.id == event.target.value);
  } else if (select == "kyushu") {
    target = kyushu.find((value)=> value.id == event.target.value);
  }
  document.querySelector('#result').innerHTML = `${target.name}が選択されました。`;
});
