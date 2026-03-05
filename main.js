//let이나 const에 한해서만 블록문 안에서 스코프가 달라진다.

/*
{
    let a = 10;
    console.log(`블록문 내부에서 변수 a : ${a}`);
}
console.log(`블록문 외부에서 변수 a : ${a}`)
*/


//var는 블록문 상관없이 스코프가 달라지지 않는다
{
    var b = 10;
    console.log(`블록문 내부에서 변수 b : ${b}`);
}
console.log(`블록문 외부에서 변수 b : ${b}`);


//즉시 실행 함수
(function init(){
    let a = 10
    console.log(a)
})();