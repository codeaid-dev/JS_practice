const word = 'abcdefgh';
const words = word.split('');
words.splice(0,4);
words.unshift('1','2','3','4');
const res = words.join('')
console.log(res);
