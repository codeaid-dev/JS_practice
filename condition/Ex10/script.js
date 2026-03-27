const nums = '2617398540';
let result = '';
let key = 0;
for (let i=0; i<nums.length; i++) {
  if (i === 0) {
    key = Number(nums[i]);
    result += nums[i];
  } else {
    result += ' ' + nums[key];
    key = Number(nums[key]);
  }
}
console.log(result);
