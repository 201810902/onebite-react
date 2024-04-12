//객체 Object
//1. 객체 생성
let obj1 = new Object();
let obj2 = {}; //객체 리터럴 - 대부분 사용

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

//객체 프로퍼티를 다루는 방법
//3.1특정 프로퍼티에 접근하기: 점 표기법, 괄호 표기법
let name = person.name; //동적으로 꺼내야하는 경우가 아니면 점 표기법 사용하자

let age = person["age"]; //""안에 넣어야한다.

console.log(age);

let property = "hobby";
let hobby = person[property]; //동적으로 프로퍼티를 꺼내와야하는 경우
console.log(hobby);

//3.2 새로운 프로퍼티 추가하기
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

//3.3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
//추가나 수정이나 비슷하다

//3.4 프로퍼티를 삭제하는 방법 "delete라는 연산자를 사용하자"
delete person.job;
delete person["favoriteFood"];
console.log(person);

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);