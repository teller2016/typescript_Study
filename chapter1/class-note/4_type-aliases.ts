interface Human {
  name: string;
  age: number;
}

// 타입 별칭
// type Human = {
//   name: string;
//   age: number;
// }

var john: Human = {
  name: 'john',
  age: 24,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
  id: number;
  title: string;
  done: boolean;
}
function getTodo(todo: Todo) {

}