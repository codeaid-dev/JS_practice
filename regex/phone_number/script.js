   const phone = document.querySelector('#phone');
   const result = document.querySelector('#result');

   document.querySelector('button').addEventListener('click', () => {
     const number = phone.value;
     const trim_number = number.replace(/-/g, '');

     if (/^[0][0-9]{9,10}$/.test(trim_number) === false) {
       result.innerHTML = '<span style="color:red;">電話番号を正しく入力してください</span>';
     } else {
       result.innerHTML = '<span style="color:blue;">送信できました</span>';
     }
   });
