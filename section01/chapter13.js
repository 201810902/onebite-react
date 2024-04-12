console.log("---chap13. callback 함수---");
// 콜백 함수
//자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미한다
function main(value) {
    // console.log(value);
    value();
}

function sub() {
    console.log("i am sub function");
}

main(() => {
    console.log("콜백함수 활용하기");
});

//콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);

})

//repeat함수 조금 변경해서 응용하기
// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx*2);
//   }
// }

// repeatDouble(5);

//repeatDouble과 같은 함수
repeat(5, function (idx) {
    console.log(idx*2);
})

