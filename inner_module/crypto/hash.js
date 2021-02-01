const crypto = require('crypto');

// .createHash(알고리즘): 사용할 해시 알고리즘을 넣는다.
//  - md5, sha1, sha256, sha512 등 가능 (md5, sha1 은 취약점 발견)
//  - sha512 도 취약점이 발견된다면 sha3로 이전하면 됨
// .update(문자열): 변환할 문자열을 넣는다.
// .digest(인코딩): 인코딩할 알고리즘을 넣는다.
//  - base64, hex, latin1 이 주로 사용 (base64 결과 문자열이 가장 짧아 자주 사용)
console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));