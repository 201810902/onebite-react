//Promise

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor 함수

    //인수로 promise 결과값을 전달할 수 있다.
    setTimeout(() => {
      if (typeof num === `number`) {
        resolve(num + 10);
    
      } else {
        reject("num은 숫자형 데이터가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

//then 메서드
//-> 그 후에
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); //프로미스를 한번 더 반환한다.
//promise 체이닝

//catch: 실패 버전의 then 메서드 같은 느낌

const p = add10(0);

p.then((result) => {
  console.log(result);
  return add10(result);
  newP.then((result) => {
    console.log(result);
  });
});
