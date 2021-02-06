// http2: SSL 암호화 + 최신 HTTP프로토콜인 http/2 를 사용할 수 있게 함
// http/2: 요청 및 응답 방식이 기존 http/1.1 보다 훨씬 효율적 (웹의 속도도 많이 개선됨)

const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello world!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(443, () => {
        console.log('port...443...waiting...');
    })