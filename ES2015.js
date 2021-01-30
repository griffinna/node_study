// 1. const, let
if (true){
    var x = 3;
}
console.log(x);     // 3

if (true){
    const y = 3;
}
console.log(y);     // Uncaught ReferenceError: y is not defined

const a = 0;
a = 1;              // Uncaught TypeError: Assignment to constant variable.

let b= 0;
b = 2               
console.log(b);     // 2      

// 2. 템플릿 문자열
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + ' 는 \'' + result + '\'';
console.log(string1);   // 1 더하기 2 는 '3'

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4} 는 '${result2}'`; 
console.log(string2)    // 1 더하기 2 는 '3'

// 3. 객체 리터럴
var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();    // Node
oldObject.sayJS();      // JS
console.log(oldObject.ES6);     // Fantastic

const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode();        // Node
newObject.sayJS();          // JS
console.log(newObject.ES6); // Fantastic

// 4. 화살표 함수
function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
}
const not2 = x => !x;

var relationship1 = {
    name: 'Zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){
        var that = this;    // relationship1 을 가리키는 this 를 that 에 저장
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
// Zero nero
// Zero hero
// Zero xero

const relationship2 = {
    name: 'Zero',
    friends: ['nero','hero','xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
}
relationship2.logFriends();

// 클래스
var Human = function(type){
    this.type = type || 'human';
}
Human.isHuman = function(human){
    return human instanceof Human;
}
Human.prototype.breath = function(){
    alert('h-a-a-a-m');
}
var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero();    // 상속하는 부분
Zero.prototype.sayName = function(){
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero);     // true

// FormData
const formData = new FormData();
formData.append('name','zerocho');
formData.append('item','orange');
formData.append('item','melon');
formData.has('item');       // true
formData.has('money');      // false
formData.get('item');       // "orange"
formData.getAll('item');    // ["orange", "melon"]
formData.append('test', ['hi','zero']);
formData.get('test');       // "hi,zero"
formData.delete('test');
formData.get('test');       // null
formData.set('item','apple');
formData.getAll('item');    // ["apple"]