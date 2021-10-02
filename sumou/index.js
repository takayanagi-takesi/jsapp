const question = `『白鵬』ただしいのはどれ？`

const answers = [
  'はくほお',
  'はくほう',
  'ほほほほう',
  'はっくほう'
];
const correct = 'はくほう';

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
    window.alert('　○　せいかい！！');
  } else {
    window.alert('ざんねん。。。がんばれ！');
  }
});
button[1].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('　○　せいかい！！');
  } else {
    window.alert('ざんねん。。。がんばれ！');
  }
});
button[2].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('　○　せいかい！！');
  } else {
    window.alert('ざんねん。。。がんばれ！');
  }
});
button[3].addEventListener('click', (e) => {
  if (correct === e.target.textContent) {
    window.alert('　○　せいかい！！');
  } else {
    window.alert('ざんねん。。。がんばれ！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解は' + score + '/' + quizLength + 'です！');
  }
});



let score = 0;
