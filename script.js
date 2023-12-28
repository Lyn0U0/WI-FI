// 获取元素
var modal = document.getElementById("myModal");
var btn = document.getElementById("randomNumberButton");
var span = document.getElementsByClassName("close")[0];
var textElement = document.getElementById("randomNumberText");

// 创建包含三句话的数组
var phrases = ["往西轉走五個路口，並穿著橘色衣服，WiFi信號就會出現在你的眼前", "朝著台北車站上的街道前進", "台科的第一學餐對著校門口方向","當你發現天上陰雲翻滾，就立即行動！前往大安森林公園穿著紅衣口袋裡放個蘋果象徵幸運","往芝山和信義路口的方向","原地高舉設備默念祝祠","尋找橘貓並在他身上繞三圈"];

// 当用户点击按钮时打开模态框
btn.onclick = function() {
  var randomIndex = Math.floor(Math.random() * phrases.length);
  var selectedPhrase = phrases[randomIndex];
  textElement.innerHTML = selectedPhrase;
  modal.style.display = "block";
}

// 当用户点击 x 按钮时，关闭模态框
span.onclick = function() {
  modal.style.display = "none";
}

// 当用户点击模态框以外的地方时，关闭模态框
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
