//Scope (범위)
//변수나 함수에 접근하거나 호출할 수 있는 범위
//전역 스코프: 전체 영역에서 접근 가능 / 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
    let b = 2; //지역스코프
    console.log(a);

    function funcB() { //함수 선언식은 함수 블록 안에서만 지역 스코프를 갖는다
        
    }
}

funcA();
console.log(funcA);

//조건문, 반복문에는 지역 스코프 해당되지 않는다.
