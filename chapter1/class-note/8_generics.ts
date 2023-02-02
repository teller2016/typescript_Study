// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('문자'); // 문자열 '문자'
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>(true);
// logText<string>('하이');

// function logNumber(num: number) {
//   console.log(num);
//   return num
// }

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('a');
str.split('');

const bool = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// const obj: Dropdown<string> = {
//   value: 10,
//   selected: true,
// }

const obj: Dropdown<number> = {
  value: 'asdf',
  selected: true,
}

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);

// 제네틱 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// 속성을 상속받아서 처리
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('asdf');
logTextLength(10);
logTextLength({length: 10, text: 'asdf'});
logTextLength({text: 'asdf'});

// 제네릭 타입제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('asdf');
getShoppingItemOption('price');
getShoppingItemOption('stock');