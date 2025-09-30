const counter = (() => {
  //プライベートにしたいプロパティ
  let count = 0;

  return {
    //加算メソッド
    increment: () => {
        count += 1;
        console.log(count);
    }
  };
})();

counter.increment(); //1が出力される
counter.increment(); //2が出力される

console.log(counter.count); //※undefined
