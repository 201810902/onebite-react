// //콜백함수
// function add(a,b) {
//     setTimeout(() => {
//         const sum = a + b;
//         console.log(sum);
//     }, 3000)
// }

// add(1, 2, (value) => {
//     console.log(value);
// });

//음식을 주문하는 상황
function orderFood() {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

orderFood((food) => {
    console.log(food);
});