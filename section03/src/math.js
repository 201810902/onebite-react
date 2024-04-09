//math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//commonJS 방식
// module.exports = {
//     add,
//     sub,
// };

//ES모듈을 쓰려면 선언을 먼저 해야된다
//commocnJS 방식과 ES모듈은 동시에 사용할 수 없다.

//export default는 기본값으로 내보냄. 
export default function multiply(a, b) {
  return a * b;
}
