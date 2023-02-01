enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer == Answer.Yes) {
    console.log('정답');
  }
  if (answer == Answer.No) {
    console.log('오답');
  }
}
askQuestion('Y');
askQuestion('Yes');
askQuestion('예스');

askQuestion(Answer.Yes);
askQuestion(Answer.No);