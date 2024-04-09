//구조분해할당
//배열의 구조분해할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three);

//객체의 구조분해할당
let person = {
  name: "김경아",
  age: 26,
  hobby: "reading",
};

let { name, age: myAge, hobby } = person;
console.log(name, myAge, hobby, (extra = "undefined"));
//객체의 구조분해할당에서는 이름을 변경할 수도 있다.
//함수에 여러 인수를 전달할 때 많이 사용된다.

//3. 객체 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}
func(person)
//객체로 넘겼을 때에만 구조분해할당이 가능하다. 일반적인 값을 넘겼으면 이루어지지 않는다.
