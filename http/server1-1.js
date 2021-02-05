const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
});
// 콜백 함수 대신 listening 이벤트 리스너 붙이기
server.listen(8080);
server.on('listening', () => {
    console.log('waiting.... at 8080 port...');
});
server.on('error', (err) => {
    console.error(err);
});