let station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください");

if (!isNaN(station)) {
  station = parseInt(station);
} else {
  alert("数値を入力してください");
}

let type;
if (station == 1) {
  type = "快速";
}else if (station == 2) {
  type = "快速と急行";
} else if (station == 3) {
  type = "特急";
} else {
  alert("その駅はありません");
}
if (station >1 && station <= 3) {
  alert("その駅には" + type + "の電車が停まります");
}
