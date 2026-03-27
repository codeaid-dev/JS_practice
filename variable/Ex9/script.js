const signal = 'しばらくすると信号機が赤に変わった';
const index = signal.indexOf('赤');
console.log(signal.slice(0,index) + '青' + signal.slice(index+1));
