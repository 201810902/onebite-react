//async
//어떤 함수를 비동기 함수로 만들어주는 키워드
//(프로미스를 반환하지 않았던) 함수가 프로미스를 반환하도록 만들어주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
} //async를 붙이면 동기적인 작업을 하는 함수를 비동기적으로 작동하여 promise를 반환하게 만들 수 있다.

console.log(getData());

//await
//async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  // getData().then((result) => {
  //     console.log(result);
  // });
  const data = await getData();
  console.log(data);
}

printData();

