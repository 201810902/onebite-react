//1. Spread 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

//2. Rest 매개변수
function funcB(...rest) {
    
}
funcB(...arr1)
//전달된 인수들이 배열 형태로 저장된다. ... != rest
//rest매개변수가 맨 마지막에 오도록 설정해야한다.
//...rest로 안쓰고 임의로 써도 된다~
