// 양반향 대칭형 암호화 (암호화된 문자열을 복호화할 수 있으며, 키(열쇠)라는 것이 사용됨)
// 대칭형 암호화에서 암호를 복호화하려면 암호화할 때 사용한 키와 같은 키를 사용해야 함
const crypto = require('crypto');

// 사용가능한 알고리즘: crypto.getCiphers()를 호출하여 확인 가능
const algorithm = 'aes-256-cbc';
// aes-256-cbc 의 key 는 32바이트, iv 는 16바이트여야 함
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화: ', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
// 암호화 할때 utf8, base64 순으로 넣었다면 복호화 할때는 base64, utf8 순으로 입력
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화: ', result2);

// 노드 공식 문서: https://nodejs.org/api/crypto.html
// npm package: crypto-js(https://www.npmjs.com/package/crypto-js)