// https: 웹 서버에 SSL 암호화를 추가 (데이터를 암호화 / 로그인, 결제가 필요한 창에 https 필수가 되는 추세)
// 임증서는 인증 기관에서 구입 필요 
// Let's Encrypt: 무료 발급 기관

const https = require('https');
const fs = require('fs').promises;

https.createServer({
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