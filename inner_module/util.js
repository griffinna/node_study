const util = require('util');
const crypto = require('crypto');

// util.deprecate: 함수가 deprecated 처리 되었음을 알림
// 첫번째 인수로 넣은 함수를 사용했을때 경고 메시지 출력 (두번째 인수가 경고 메시지)
const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);
// util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿈
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.log(error);
    });