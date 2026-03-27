const str = '1,2,3,454,86,ab,cd,ef';
data = str.split(',');
index = data.indexOf('86');
data[index] = 'Hello';
console.log(data);
