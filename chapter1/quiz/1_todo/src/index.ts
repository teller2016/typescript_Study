interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Array<TodoItem>;

// api
function fetchTodoItems(): Array<TodoItem> {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Array<TodoItem> {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoItem): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoItem): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TodoItem {
  return todoItems[0];
}

function showCompleted(): Array<TodoItem> {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems(todos: Array<TodoItem>): void {
  todos.forEach(todo => {
    addTodo(todo);
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems([
  { id: 1, title: '안녕', done: false },
  { id: 2, title: '타입', done: false },
]);
log();
