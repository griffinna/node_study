const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

/** 순환참조(circular dependency)
 *      : 순환참조가 있을 경우에는 순환 참조되는 대상을 빈 객체로 만들기 때문에 구조를 잘 잡는 것이 중요
    require dep1 {}
    require deps [Function (anonymous)]
    dep2 [Function (anonymous)]
    dep1 {}
    (node:62643) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
*/