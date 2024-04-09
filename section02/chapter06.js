//1. 배열 순회
let arr = [1, 2, 3];

//1-1.배열 인덱스를 이용해 순회하기
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++){

}

//1-2. for of 반복문
//배열을 순회하기 위해서만 존재하는 특수한 반복문
//index를 저장하지 않고 그냥 배열 내 요소에 있어서만 반복함
//작업할때 편한 방법을 선택해서 사용하기
for (let item of arr) {
    console.log(item);
}

//2. 객체 순회
let person = {
    name: "모코코",
    age: 2,
    hobby: "로스트아크",
};

//2.1 object.keys 사용
//-> 객체에서 key값들만 뽑아서 새로운 배열로 변환한다
let keys = Object.keys(person);

for (let key of keys) { //배열에만 사용
    const value = person[key];
    // console.log(key, person[key]);
}

//2.2 Object.values
//객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

//2.3 for in
for (let key in person ){ //객체에만 사용
    const value = person[key];
    console.log(key,":", value);
}

