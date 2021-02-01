const crypto = require('crypto');
// 비밀번호 암호화히기
crypto.randomBytes(64, (err, buf) => {      // 64바이트 길이의 문자열을 만든다.
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    // crypto.pbkdf2(비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘);
    // 예시. sha512 로 변환된 결괏값을 다시 sha512 로 변환하는 과정을 10만 번 반복
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password: ', key.toString('base64'));
    });
});
// randomBytes, pbkdf2 는 내부적으로 스레드풀을 사용해 멀티 스레딩으로 동작함
// randomBytes 이므로 salt 값을 잘 보관하고 있어야 비밀번호를 찾을 수 있다.