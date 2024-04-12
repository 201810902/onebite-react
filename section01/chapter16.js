//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2;
animal.name = "까망이";
delete animal.color; //삭제

//상수: 새로운 값을 할당할 수 없음. 기존 값의 프로퍼티를 수정하는 것이나 삭제는 가능하다.

//2. 메서드
//객체 프로퍼티 중 함수 프로퍼티..

const person = {
  name: "이정환",
  sayHi: () => {
    console.log("안녕!");
  },
};

//익명함수, 화살표 함수, 화살표 보다 더 단축된 메서드선언 형태로 가능.
//메서드들은 점표기법, 괄호 표기법으로 호출 가능하다
//메서드는 객체의 동작을 설명하는데 사용된다.
