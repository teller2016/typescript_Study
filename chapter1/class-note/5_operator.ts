// function logMessage(value: any) {
//   console.log(value);
// }

var apple: string | number | boolean;
var pear: string & number & boolean;

// OR 연산자 사용 (UNION TYPE)
function logMessage(value: string | number) {
  if (typeof value == 'number') {
    value.toLocaleString();
  }
  if (typeof value == 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

logMessage('Molly!!');
logMessage(100);

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

function askSomone(someone: Developer2 | Person2) {
  // someone.skill;
  // someone.age;
  // someone.name;
}

askSomone({ name: '디벨로퍼', skill: '웹개발' });
askSomone({ name: '몰리', age: 10 });

function callSomeone(someone: Developer2 & Person2) {
  someone.skill;
  someone.age;
  someone.name;
}

callSomeone({ name: '디벨로퍼', skill: '웹개발', age: 10 });
callSomeone({ name: '디벨로퍼', skill: '웹개발' });
callSomeone({ name: '몰리', age: 10 });