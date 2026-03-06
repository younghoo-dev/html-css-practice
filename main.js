const str = 'abcdefgkslf;jlksdj;f. s;dofj';
console.log(str.length);


const email = 'testgmail.com';
if(email.includes('@') === false){
    console.log('@가 없습니다.');
};


const Email = 'test@naver.com';
console.log(Email.indexOf('a'));


const arr = ['a', 'b', 'c'];
arr.pop();
console.log(arr);

const arr1 = ['a', 'b', 'c'];
arr1.push('d');
console.log(arr1);


const arr2 = ['a', 'b', 'c'];
arr2.forEach(function(v){
    console.log(v);
});


const date = new Date();
console.log(date.getFullYear());



const ran = Math.random();
console.log(ran);
//0부터 1 사이의 무작위 수 구하기



const random = Math.random() * 20;
console.log(Math.floor(random));
//0부터 19 까지의 임의의 정수 구하기

