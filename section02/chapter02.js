function returnFalse(){
    console.log("false 함수");
    return undefined;   
}
function returnTrue(){
    console.log("true 함수");
    return true;
}

//단락 평가 작동
//논리연산식에서 첫번째 피연산자로 평가가 완료되면 두번째 피연산자에는 접근조차 하지 않는다
console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

console.log(returnFalse() || returnTrue());
console.log(returnTrue()||returnFalse());

//단락평가 실제 활용예시
