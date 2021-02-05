const http = require('http');
const fs = require('fs').promises;

const users = {};   // 데이터 저장용

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET') {
            if(req.url === '/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
                // return 을 붙이지 않아서 res.end 가 여러번 실행되면 [Error: Can't set headers agter they are sent to the client.] 발생
            } else if(req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if(req.url === '/users') {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            // 주소가 /, /about 이 아니면
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found 발생
            }
        } else if(req.method === 'POST') {
            if(req.url === '/user') {
                let body = '';
                // 요청의 body 를 stream 형식으로 받음
                req.on('data', (data) => {
                    body += data;
                });
                // 요청의 body 를 다 받은 후에 실행됨
                return req.on('end', () => {
                    console.log('POST 본문(Body): ', body);
                    const { name } = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }
        } else if (req.method === 'PUT') {
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                // req, res 내부적으로는 스트림으로 되어있으로 요청/응답 데이터가 스트림 형식으로 전달됨
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body): ', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
        } else if(req.method === 'DELETE') {
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'ContentType': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8082, () => {
        console.log('wait....from... 8082... port....');
    })