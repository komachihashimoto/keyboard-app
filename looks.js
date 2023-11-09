
//darken関数の定義
function darken(color, percentage) {
  let r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16);
      r = Math.floor(r * (100 - percentage) / 100);
      g = Math.floor(g * (100 - percentage) / 100);
      b = Math.floor(b * (100 - percentage) / 100);
      return "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
}


const keyBoard  = document.getElementById('keyBoard');
const resetBtn  = document.getElementById('resetBtn');
const bodyColor = document.body;

let capColor        = '#000000';
let fontColor       = '#000000';
let backColor       = '#000000';
let colorPicker     = document.getElementById('colorPicker');
let fontColorPicker = document.getElementById('fontColorPicker');
let colors          = document.getElementById('colors');

//選んだ色の保持
colorPicker.addEventListener('change', () => {
  capColor = colorPicker.value;
});

//キーキャップ装飾時、色を付けない部分の設定
let excludedIds = ['Display','keyBoard','R1','R2','R3','R4','Bottom','colorPicker','fontColorPicker','colors'];

//各キーキャップ部分の色付け判定
document.body.addEventListener('click', function(event) {
  if (event.target.id && !excludedIds.includes(event.target.id)) {
      event.target.style.backgroundColor = capColor;
      event.target.style.borderColor = darken(capColor, 10);
  }
});

//キーボードケース部分の色付け判定
if (keyBoard) {
  keyBoard.addEventListener('click', (event) => {
    if (event.target === keyBoard) {
      keyBoard.style.borderColor = darken(capColor, 10);
    }
  })
};

//選んだ文字色の保持
fontColorPicker.addEventListener('change', () => {
  fontColor = fontColorPicker.value;
});

//各キーキャップ部分の文字色付け判定
document.body.addEventListener('click', function(event) {
  if (event.target.id && !excludedIds.includes(event.target.id)) {
      event.target.style.color = fontColor;
  }
});

//リセットボタンの処理
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    location.reload();
  });
};

//背景色の付与
colors.addEventListener('change', () => {
  bodyColor.style.backgroundColor = colors.value;
});
