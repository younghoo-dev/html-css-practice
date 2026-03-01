num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

do{
    console.log('무조건')
    console.log('한 번은 실행')
}while(false);

for(let a = 1; a <= 2; a++){
    console.log(`a= ${a}`);
    for(let b = 1; b < 4; b++){
        console.log(`b= ${b}`)
    }
}

const arr = ['apple','banana', 'orange']
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let c = 1; c < 12; c++){
    if(c % 2 === 0) continue
    console.log(c)
}