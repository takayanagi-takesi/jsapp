const quiz = [
  {
    question: '『白鵬』ただしいのはどれ？',
    outGazou: '98ce2_1581_a916d915da25ab3cc2989e86f75fff91.jpg',
    answers: [ 'はくほお', 'はくほう', 'ほほほほう', 'はっくほう'],
    correct: 'はくほう'
  },{
    question: '『鶴竜』ただしいのはどれ？',
    answers: ['かくりゆう', 'はくりゅう', 'かくりゅ', 'かくりゅう'],
    correct: 'かくりゅう'
  },{
    question: '『照ノ富士』ただしいのはどれ？',
    answers: ['てるのふし', 'ですのふじ', 'てるのふじ', 'てるのぶじ'],
    correct: 'てるのふじ'
  }
];

// quizがある限り実行、０から開始を指定
// const $window = window;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// １問目の基本文法。（一番上の基礎）
// const question = `『白鵬』ただしいのはどれ？`

// const answers = [
//   'はくほお',
//   'はくほう',
//   'ほほほほう',
//   'はっくほう'
// ];
// const correct = 'はくほう';

// console.log(document.getElementById('js-question').textContent);
const button = document.getElementsByTagName('button');
const buttonLength = button.length;

// クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  document.getElementById('gazou').innerHTML = quiz[quizIndex].outGazou;
  let buttonIndex = 0;
  // button[0].textContent = answers[0];
  // button[1].textContent = answers[1];
  // button[2].textContent = answers[2];
  // button[3].textContent = answers[3];   ⇓⇓⇓⇓
  // let buttonLength = $button.length;
  // ↑buttonLengthにbutton[]を代入
  while (buttonIndex < buttonLength) {
    // shuffle(answers);
    button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];

    buttonIndex++; 
}};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
  window.alert('　○　せいかい！！');
  score++;
  } else {
  window.alert('ざんねん。。。がんばれ！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題が残ってたら実行
    setupQuiz(); 
  } else {
  // 問題が残っていなかったら実行
    document.getElementById('kekka').innerHTML = 
    `やおきくんおつかれさまでした！！ <br>
    やおきくんのせいかいすうは<br>
    ${quizLength}もんちゅう${score}もんのせいかいです！`;
 

  }
};

let handlerIndex = 0;
// const buttonLength = $button.length;
while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);

  });
  handlerIndex++;

};


// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });


// // ぼたんをクリックしたら正誤判定
// $button[0].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//       // 　　　　　　$button[]
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[1].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[2].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }
// });
// $button[3].addEventListener('click', (e) => {
//   if (correct === e.target.textContent) {
//     window.alert('　○　せいかい！！');
//   } else {
//     window.alert('ざんねん。。。がんばれ！');
//   }

  // quizIndex++;

//   if (quizIndex < quizLength) {
//     setupQuiz();
//   } else {
//     window.alert('終了！あなたの正解は' + score + '/' + quizLength + 'です！');
//   }