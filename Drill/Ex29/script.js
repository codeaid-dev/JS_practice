const user_list = [
  { name: '鈴木二郎', age: 18 },
  { name: '田中幸一', age: 25 },
  { name: '佐藤さおり', age: 32 },
  { name: '高橋健太', age: 43 },
  { name: '山田太郎', age: 57 }
];

const btn = document.querySelectorAll('.button');
for (let i=0; i<btn.length; i++) {
  btn[i].addEventListener('click', () => {
    const target = btn[i].id;

    const filter_list = user_list.filter((obj) => {
      return obj.age >= target;
    });

    let list = '';
    for (let data of filter_list) {
      list += `<li>${data.name} : ${data.age}歳</li>`;
    }
    document.querySelector('.user_list').innerHTML = list;
  });
}
