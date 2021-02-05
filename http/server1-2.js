const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8080, () => {   // 서버연결
        console.log('waiting at 8080....');
    });

// 서버 여러개 실행시키기 (port 번호는 다르게 설정해야함!!)
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(8081, () => {   // 서버연결
        console.log('waiting at 8081....');
    });