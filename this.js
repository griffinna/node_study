console.log(this);                      // {}
console.log(this === module.exports);   // true
console.log(this === exports);          // true

function whatIsThis(){
    console.log('function', this === exports, this === global);     // function false true
}
whatIsThis();

// 최상위 스코프에 존재하는 this 는 module.exports(or exports 객체)를 가리킨다.
// 또한, 함수 선언문 내부의 this 는 global 객체를 가리킨다.