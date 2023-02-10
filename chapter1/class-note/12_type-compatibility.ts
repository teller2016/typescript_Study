// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;
// developer = person;
person = developer;

class Person {
    name: string;
}

developer = new Person();

// 함수
var add = function(a: number): number {
    console.log(a);
    return a;
}

var sum = function(a: number, b: number): number {
    return a + b;
}
// sum이 add보다 크다 => sum의 구조가 add의 구조보다 크다
// add에 sum을 넣으면 에러 발생
add = sum; // add는 하나의 인자만 받도록 되어있다
sum = add; // 가능

// 제네릭
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    Data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; // Data의 타입의 정의되어서 에러 발생
notEmpty2 = notEmpty1;