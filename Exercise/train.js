let station = prompt("1.A駅 2.B駅 3.C駅 4.D駅 5.E駅\n行き先の駅を1, 2, 3, 4, 5から選んでください");

if (!isNaN(station)) {
  station = parseInt(station);
} else {
  alert("数値を入力してください");
}

let type;
if (station == 1 || station == 3 || station == 4) {
  type = "快速";
}else if (station == 2) {
  type = "快速・急行";
} else if (station == 5) {
  type = "快速・急行・特急";
} else {
  alert("その駅はありません");
}
if (station >= 1 && station <= 5) {
  alert("その駅には" + type + "の電車が停まります");
}
