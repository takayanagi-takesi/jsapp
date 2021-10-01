const question = 'ゲーム市場、最も売れたゲーム機は次の打ちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

// console.log(document.getElementById('js-question').textContent);
const button = document.getElementsByTagName('button');

const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  // button[0].textContent = answers[0];
  // button[1].textContent = answers[1];
  // button[2].textContent = answers[2];
  // button[3].textContent = answers[3];   ⇓⇓⇓⇓
  let buttonLength = button.length;
  while (buttonIndex < buttonLength) {
    button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++; 
}};

setupQuiz();

// ぼたんをクリックしたら正誤判定
button[0].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
button[1].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
button[2].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});
button[3].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});