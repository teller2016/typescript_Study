// test
// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';
// 숫자 선언
let num: number = 10;
// 배열 선언
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3]; // 위와 동일 선언

let heroes: Array<string> = ['a', 'b', 10];

// TS 튜플
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100,
// };

let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000,
}

// TS boolean
let show: boolean = true;