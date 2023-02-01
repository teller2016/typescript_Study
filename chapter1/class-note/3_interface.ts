interface Dog {
  name: string;
  age: number;
}

// 변수에 활용한 인터페이스
var dog: Dog = {
  name: 'molly',
  age: 10,
};

// 함수에 인터페이스 활용
function getDog(dog: Dog) {
  console.log(dog);
}

getDog(dog);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
//obj['cssFile'] = 'a'; // 오류 

Object.keys(obj).forEach(function (value) {

});

// 인터페이스 확장
interface Person {
  name: string,
  age: number,
}

interface Developer extends Person {
  skill: string,
}

var molly: Developer = {
  name: 'molly',
  age: 11,
  skill: 'c++'
}