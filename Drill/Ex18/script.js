const user_list = [
  { id: '2025-101', name: '高橋大介' },
  { id: '2025-102', name: '鈴木健司' },
  { id: '2025-103', name: '後藤栞' },
  { id: '2025-104', name: '佐藤かおり' },
  { id: '2025-105', name: '田中二郎' }
];

const search = document.querySelector('#search');
const result = document.querySelector('#result');
result.style.fontSize = '20px';
search.addEventListener('keyup', () => {
  const search_id = search.value;

  const target = user_list.find((data) => {
    return data.id === search_id;
  });
  if (target == null) {
    result.textContent = '該当者なし';
  } else {
    result.textContent = target.name;
  }
});
