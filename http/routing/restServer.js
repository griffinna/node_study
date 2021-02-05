const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET') {
            if(req.url === '/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
                // return 을 붙이지 않아서 res.end 가 여러번 실행되면 [Error: Can't set headers agter they are sent to the client.] 발생
            }else if(req.url === '/about'){
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            // 주소가 /, /about 이 아니면
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found 발생
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