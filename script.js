// 獲取元素
var modal = document.getElementById("myModal");
var btn = document.getElementById("randomNumberButton");
var span = document.getElementsByClassName("close")[0];
var textElement = document.getElementById("randomNumberText");
var loading = document.getElementById("loading");

// 创建包含三句话的数组
var phrases = ["往西轉走五個路口，並穿著橘色衣服，WiFi信號就會出現在你的眼前", "朝著台北車站上的街道前進", "國立臺灣科技大學的第一學餐對著校門口方向","當你發現天上陰雲翻滾，就立即行動！前往大安森林公園穿著紅衣口袋裡放個蘋果象徵幸運","往芝山和信義路口的方向","原地高舉設備默念祝祠","尋找橘貓並在他身上繞三圈","北投圖書館關館時間","今天不宜使用WI-FI","穿著綠色毛衣，可以增加吸收訊號","下午三點半敦南誠品舊址"];

// 按鈕點擊事件處理
btn.onclick = function() {
    modal.style.display = "block"; // 顯示模態框
    textElement.style.display = "none"; // 隱藏文本
    loading.style.display = "block"; // 顯示加載圖示
  
    // 延遲五秒後執行
    setTimeout(function() {
      var randomIndex = Math.floor(Math.random() * phrases.length);
      textElement.innerHTML = phrases[randomIndex];
      textElement.style.display = "block"; // 顯示文本
      loading.style.display = "none"; // 隱藏加載圖示
    }, 5000);
  }
  
  // 關閉模態框
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // 點擊模態框以外區域關閉模態框
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }