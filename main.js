let num = 7
if(num % 2 === 0){
    console.log('변수 num에 할당된 숫자는 짝수입니다.');
}
else{
    console.log('변수 num에 할당된 숫자는 홀수입니다.');
}

let score = 79
if(score > 90 && score <= 100){
    console.log('A+')
}
else if(score <= 90 && score >80){
    console.log('B+')
}
else{
    console.log('바보')
}


let food = 'carrot'
switch(food){
    case 'melon':
    case 'apple':
    case 'banana':
        console.log('fruit');
        break

    case 'carrot':
        console.log('vegetable')
        break

    default:
        console.log("It's not a fruit and vegetable.")
}