const user_list = [
  { id: 101, name: '高橋' },
  { id: 102, name: '鈴木' },
  { id: 103, name: '後藤' },
  { id: 104, name: '佐藤' },
  { id: 105, name: '田中' }
];

const search = document.querySelector('#search');
const result = document.querySelector('#result');
search.addEventListener('keyup', ()=>{
  const search_id = Number(search.value);

  const target = user_list.find((data) => {
    return data.id === search_id;
  });
  console.log(target);
  if (target === undefined) {
    result.innerText = '該当者なし';
  } else {
    result.innerText = target.name;
  }
});
