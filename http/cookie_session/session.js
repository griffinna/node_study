const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

// 서버에 사용자 정보를 저장하고 클라이언트와는 세션 아이디로만 소통
// 세션 아이디는 꼭 쿠키를 사용해서 주고받지 않아도 됨
// 실제 세션은 변수에 저장 X, 레디스(Redis)나 멤캐시드(Memcached) 같은 데이터베이스에 넣어둠
const session = {};

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();
        // 사용자의 이름과 만료시간은 uniqueInt 속성명 아래에 있는 session 이라는 객체에 대신 저장
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
        });
        res.end();
    // 세션 쿠키가 존재하고, 만료기간이 지나지 않았다면
    } else if(cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요.`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
    .listen(8085, () => {
        console.log('port...8085...waiting....');
    })