const sentence = 'This is my ballpen. This ballpen is comfortable to write on.';
const res1 = sentence.replaceAll('ballpen','pen');
const res2 = res1.replace(' This',' My');
console.log(sentence);
console.log(res2);
