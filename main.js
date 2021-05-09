const topic1 = document.getElementById("topic1");
const topic2 = document.getElementById("topic2");
const topic3 = document.getElementById("topic3");
const display1 = document.getElementById("display1");

topic1.onclick = function () {
  display1.textContent = "明治大学です！";
};
topic2.onclick = function () {
  display1.textContent = "歌うこと、ギター、写真、謎解き、モンハン(ガチです)";
};
topic3.onclick = function () {
  display1.textContent = "軽音楽サークル(ギター、ボーカル)";
};

const btn = document.getElementById("btn");

btn.onclick = function () {
  const n = Math.random();
  if (n < 0.3) {
    btn.textContent = "大吉"; // 30%
  } else if (n < 0.45) {
    btn.textContent = "吉"; // 15%
  } else if (n < 0.6) {
    btn.textContent = "中吉"; // 15%
  } else if (n < 0.85) {
    btn.textContent = "小吉"; // 15%
  } else {
    btn.textContent = "凶"; // 15%
  }
};
