// ボタン要素とh2要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時の処理を設定
button.addEventListener('click', function () {
  text.textContent = 'ボタンをクリックしました';
});