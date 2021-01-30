// exports 객체 사용: 객체만 사용가능 (함수 X)
// 한 모듈에 exports 객체와 module.exports 를 동시에 사용하지 않는 것이 좋다.
// exports ---참조---> module.exports ---참조---> {}
exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';

// const odd = '홀수입니다.';
// const even = '짝수입니다.';

// module.exports = {
//     odd,
//     even
// }