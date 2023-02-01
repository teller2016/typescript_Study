function Person (name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);
// 아래 코드와 동일

// ES2015 ES6에서 나옴
class Person {
  name;
  age;
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

const molly = new Person('몰리', 11);