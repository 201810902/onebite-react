console.log("chap12");

function funcA() {
  console.log("funcA");
}
let varA = funcA;
varA();

//값으로 함수를 생성하는 방식 = 함수 표현식 , 값으로 취급이 되기 때문에 호이스팅의 대상이 되지 않는다.
let varB = function () {
  console.log("funcB");
};

varB;

//화살표 함수
let varC = (value) => {
  return value + 1;
};
console.log(varC(3));
