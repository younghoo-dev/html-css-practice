const person = {
    name: 'YHoo',
    age: 20,
    'phone number': '010-6806-7455',
    printInfo: function(msg) {
        console.log(msg);
    },
};
console.log(person.name);
console.log(person['age']);
console.log(person['phone number'])
person.printInfo('hello');


//객체 속성 수정하기

person.name = '철수';
console.log(person.name);



//객체 속성 추가하기/삭제하기

const human = {};
human.name = 'Jjang';
human.age = 22;

delete human.age;
console.log(human);



//깊은 복사와 얕은 복사

let num1 = 10;
let num2 = num1;

num1 = 30;
console.log(num1, num2);



const obj1 = {
    name: 'Wow',
};
const obj2 = obj1;

delete obj1.name;
console.log(obj1, obj2);